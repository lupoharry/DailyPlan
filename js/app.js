window.DaylightApp = (() => {
const { getAllEntries, getEntryByDate, getEntryById, saveEntry, updateEntry, deleteEntry, clearAllEntries, importEntries } = window.DaylightStorage;
const { moodByName, renderMoodPicker } = window.DaylightMood;
const { initializeNavigation, setActiveNavigation, showPage } = window.DaylightNavigation;
const { renderDashboard } = window.DaylightDashboard;
const { initializeJournalFilters, renderJournalList, renderJournalDetail } = window.DaylightJournal;
const { initializeCalendar, renderCalendar } = window.DaylightCalendar;
const { localDateString, showToast, confirmAction } = window.DaylightUtils;

let currentPage = "dashboard";
let editorEntryId = null;
let detailEntryId = null;
let editorOrigin = "dashboard";
let initialFormSnapshot = "";
let selectedMood = null;
let previousEditorDate = localDateString();

const form = document.getElementById("journal-form");
const dateInput = document.getElementById("entry-date");
const moodInput = document.getElementById("entry-mood");

function snapshotForm() {
  return JSON.stringify({
    fields: [...new FormData(form).entries()].filter(([name]) => name !== "date"),
    mood: selectedMood?.name || ""
  });
}

function editorIsDirty() {
  return currentPage === "editor" && snapshotForm() !== initialFormSnapshot;
}

function resetForm(date = localDateString()) {
  form.reset();
  dateInput.value = date;
  previousEditorDate = date;
  editorEntryId = null;
  selectedMood = null;
  moodInput.value = "";
  renderMoodPicker(document.getElementById("mood-picker"), null, selectMood);
  updateCharacterCount();
  setEditorLabels(false);
  initialFormSnapshot = snapshotForm();
}

function setEditorLabels(isEditing) {
  document.getElementById("editor-heading").textContent = isEditing ? "Edit your entry" : "A new page";
  document.getElementById("save-entry").innerHTML = isEditing ? "Save changes <span>→</span>" : "Save journal <span>→</span>";
  document.querySelector(".editor-heading .muted").textContent = isEditing ? "A moment worth revisiting." : "There’s no right way to write. Just begin.";
}

function selectMood(mood) {
  selectedMood = mood;
  moodInput.value = mood.name;
  renderMoodPicker(document.getElementById("mood-picker"), mood.name, selectMood);
}

function loadEntryIntoForm(entry) {
  if (!entry) {
    resetForm(dateInput.value || localDateString());
    return;
  }
  editorEntryId = entry.id;
  dateInput.value = entry.date;
  previousEditorDate = entry.date;
  form.elements.title.value = entry.title;
  form.elements.content.value = entry.content;
  form.elements.wentWell.value = entry.reflections.wentWell;
  form.elements.couldImprove.value = entry.reflections.couldImprove;
  form.elements.gratitude.value = entry.reflections.gratitude;
  form.elements.learned.value = entry.reflections.learned;
  selectMood(moodByName(entry.mood.name) || entry.mood);
  updateCharacterCount();
  setEditorLabels(true);
  initialFormSnapshot = snapshotForm();
}

function openEditor(date = localDateString(), entry = null) {
  editorOrigin = currentPage === "editor" || currentPage === "detail" ? editorOrigin : currentPage;
  if (entry) loadEntryIntoForm(entry);
  else {
    resetForm(date || localDateString());
    loadEntryIntoForm(getEntryByDate(date || localDateString()));
  }
  currentPage = "editor";
  showPage("editor");
  setActiveNavigation("editor");
}

function navigate(page, options = {}) {
  if (page === currentPage && page !== "editor") return;
  if (currentPage === "editor" && editorIsDirty()) {
    if (!confirmAction("You have unsaved changes. Leave without saving?")) return;
  }
  if (page === "editor") {
    openEditor(options.date || localDateString(), options.entry || null);
    return;
  }
  if (page === "detail") return;
  currentPage = page;
  if (page === "dashboard") renderDashboard();
  if (page === "journals") renderJournalList();
  if (page === "calendar") renderCalendar(calendarDateSelected);
  showPage(page);
  setActiveNavigation(page);
}

function calendarDateSelected(date, entry) {
  if (entry) openDetail(entry.id);
  else navigate("editor", { date });
}

function openDetail(id) {
  if (currentPage === "editor" && editorIsDirty() && !confirmAction("You have unsaved changes. Leave without saving?")) return;
  const entry = renderJournalDetail(id);
  if (!entry) {
    showToast("That journal entry could not be found.", "error");
    renderJournalList();
    return;
  }
  if (currentPage !== "detail") editorOrigin = currentPage === "calendar" ? "calendar" : "journals";
  detailEntryId = id;
  currentPage = "detail";
  showPage("detail");
  setActiveNavigation("detail");
}

function updateCharacterCount() {
  const count = document.getElementById("entry-content").value.length;
  document.getElementById("character-count").textContent = `${count.toLocaleString()} ${count === 1 ? "character" : "characters"}`;
}

function onSave(event) {
  event.preventDefault();
  const title = form.elements.title.value.trim();
  const content = form.elements.content.value.trim();
  if (!dateInput.value || !title || !content || !selectedMood) {
    showToast("Add a date, title, mood, and a few thoughts before saving.", "error");
    const target = !dateInput.value ? dateInput : !title ? form.elements.title : !selectedMood ? document.getElementById("mood-picker") : form.elements.content;
    target.focus();
    return;
  }
  const data = {
    date: dateInput.value,
    title,
    mood: { name: selectedMood.name, emoji: selectedMood.emoji, score: selectedMood.score },
    content: form.elements.content.value,
    reflections: {
      wentWell: form.elements.wentWell.value,
      couldImprove: form.elements.couldImprove.value,
      gratitude: form.elements.gratitude.value,
      learned: form.elements.learned.value
    }
  };
  try {
    const wasUpdate = Boolean(editorEntryId || getEntryByDate(data.date));
    if (editorEntryId) updateEntry(editorEntryId, data);
    else saveEntry(data);
    showToast(wasUpdate ? "Journal updated successfully." : "Journal saved successfully.");
    initialFormSnapshot = snapshotForm();
    navigate("journals");
  } catch (error) {
    showToast(`Could not save your journal: ${error.message}`, "error");
  }
}

function removeEntry(id) {
  const entry = getEntryById(id);
  if (!entry || !confirmAction(`Delete “${entry.title}”? This journal entry cannot be recovered.`)) return;
  try {
    deleteEntry(id);
    showToast("Journal deleted successfully.");
    renderDashboard();
    renderJournalList();
    renderCalendar(calendarDateSelected);
    if (currentPage === "detail") navigate(editorOrigin === "calendar" ? "calendar" : "journals");
  } catch (error) {
    showToast(`Could not delete the entry: ${error.message}`, "error");
  }
}

function exportData() {
  const data = JSON.stringify(getAllEntries(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `daylight-journal-${localDateString()}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Your journal export is ready.");
}

async function handleImport(event) {
  const input = event.currentTarget;
  const file = input.files?.[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!Array.isArray(data)) throw new Error("The file should contain a JSON list of journal entries.");
    if (!confirmAction(`Import ${data.length} entries? Entries on matching dates will be updated.`)) return;
    const count = importEntries(data);
    showToast(`${count} ${count === 1 ? "entry" : "entries"} imported successfully.`);
    renderDashboard();
    renderJournalList();
    renderCalendar(calendarDateSelected);
  } catch (error) {
    showToast(`Import failed: ${error.message}`, "error");
  } finally {
    input.value = "";
  }
}

function bindEvents() {
  initializeNavigation(page => {
    if (page === "editor") navigate("editor", { date: localDateString() });
    else navigate(page);
  });
  initializeJournalFilters(openDetail);
  initializeCalendar(calendarDateSelected);
  document.getElementById("header-new-entry").addEventListener("click", () => navigate("editor", { date: localDateString() }));
  document.getElementById("today-entry-button").addEventListener("click", () => navigate("editor", { date: localDateString() }));
  document.addEventListener("click", event => {
    const entry = event.target.closest("[data-open-entry]");
    if (entry) {
      openDetail(entry.dataset.openEntry);
      return;
    }
    const action = event.target.closest("[data-action='today-entry']");
    if (action) navigate("editor", { date: localDateString() });
  });
  document.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-entry-view], [data-open-entry], .recent-item")) {
      event.preventDefault();
      const id = event.target.dataset.entryView || event.target.dataset.openEntry;
      if (id) openDetail(id);
    }
  });
  document.addEventListener("daylight:edit", event => {
    const entry = getEntryById(event.detail);
    if (entry) navigate("editor", { date: entry.date, entry });
  });
  document.addEventListener("daylight:delete", event => removeEntry(event.detail));
  form.addEventListener("submit", onSave);
  dateInput.addEventListener("change", () => {
    if (editorIsDirty() && !confirmAction("Changing the date will discard your unsaved changes. Continue?")) {
      dateInput.value = previousEditorDate;
      return;
    }
    loadEntryIntoForm(getEntryByDate(dateInput.value));
  });
  document.getElementById("entry-content").addEventListener("input", updateCharacterCount);
  document.getElementById("clear-form").addEventListener("click", () => {
    if (confirmAction("Clear this form? Your saved journal entries will not be changed.")) resetForm(dateInput.value || localDateString());
  });
  const cancelEditor = () => navigate(editorOrigin);
  document.getElementById("editor-cancel").addEventListener("click", cancelEditor);
  document.getElementById("editor-cancel-bottom").addEventListener("click", cancelEditor);
  document.getElementById("detail-back").addEventListener("click", () => navigate(editorOrigin === "calendar" ? "calendar" : "journals"));
  document.getElementById("detail-edit").addEventListener("click", () => {
    const entry = getEntryById(detailEntryId);
    if (entry) navigate("editor", { date: entry.date, entry });
  });
  document.getElementById("detail-delete").addEventListener("click", () => removeEntry(detailEntryId));
  document.getElementById("export-data").addEventListener("click", exportData);
  document.getElementById("import-file").addEventListener("change", handleImport);
  document.getElementById("clear-all-data").addEventListener("click", () => {
    if (!confirmAction("Permanently delete ALL journal entries from this browser? This cannot be undone. Consider exporting a backup first.")) return;
    try {
      clearAllEntries();
      renderDashboard();
      renderJournalList();
      renderCalendar(calendarDateSelected);
      showToast("All journal data has been cleared.");
    } catch (error) {
      showToast(`Could not clear journal data: ${error.message}`, "error");
    }
  });
  window.addEventListener("beforeunload", event => {
    if (!editorIsDirty()) return;
    event.preventDefault();
    event.returnValue = "";
  });
}

function initialize() {
  if (!("localStorage" in window)) {
    showToast("This browser does not support local storage.", "error");
    return;
  }
  renderMoodPicker(document.getElementById("mood-picker"), null, selectMood);
  resetForm();
  bindEvents();
  renderDashboard();
  renderJournalList();
  renderCalendar(calendarDateSelected);
  showPage("dashboard");
  setActiveNavigation("dashboard");
}

initialize();
return {};
})();
