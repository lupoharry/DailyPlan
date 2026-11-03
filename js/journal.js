window.DaylightJournal = (() => {
const { getAllEntries, getEntryById } = window.DaylightStorage;
const { MOODS } = window.DaylightMood;
const { formatDate, entryDateTime, escapeHTML } = window.DaylightUtils;

function initializeJournalFilters(onOpen) {
  const moodFilter = document.getElementById("filter-mood");
  MOODS.forEach(mood => {
    const option = document.createElement("option");
    option.value = mood.name;
    option.textContent = `${mood.emoji} ${mood.name}`;
    moodFilter.append(option);
  });
  ["journal-search", "filter-date", "filter-month", "filter-mood", "sort-order"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderJournalList);
    document.getElementById(id).addEventListener("change", renderJournalList);
  });
  document.getElementById("journal-list").addEventListener("click", event => {
    const action = event.target.closest("[data-entry-action]");
    if (action) {
      event.stopPropagation();
      const { entryAction, entryId } = action.dataset;
      if (entryAction === "view") onOpen(entryId);
      if (entryAction === "edit") document.dispatchEvent(new CustomEvent("daylight:edit", { detail: entryId }));
      if (entryAction === "delete") document.dispatchEvent(new CustomEvent("daylight:delete", { detail: entryId }));
      return;
    }
    const title = event.target.closest("[data-entry-view]");
    if (title) onOpen(title.dataset.entryView);
  });
  renderJournalList();
}

function renderJournalList() {
  const search = document.getElementById("journal-search").value.trim().toLowerCase();
  const exactDate = document.getElementById("filter-date").value;
  const month = document.getElementById("filter-month").value;
  const mood = document.getElementById("filter-mood").value;
  const sort = document.getElementById("sort-order").value;
  let entries = getAllEntries().filter(entry =>
    (!search || `${entry.title} ${entry.content}`.toLowerCase().includes(search)) &&
    (!exactDate || entry.date === exactDate) &&
    (!month || entry.date.startsWith(month)) &&
    (!mood || entry.mood.name === mood)
  );
  entries.sort((a, b) => sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  document.getElementById("results-caption").textContent = `${entries.length} ${entries.length === 1 ? "entry" : "entries"}`;
  const list = document.getElementById("journal-list");
  if (!entries.length) {
    const isFiltered = Boolean(search || exactDate || month || mood);
    list.innerHTML = `<div class="empty-state"><div class="empty-illustration">${isFiltered ? "⌕" : "✧"}</div><h3>${isFiltered ? "No entries found" : "No journal entries yet."}</h3><p>${isFiltered ? "Try adjusting your search or filters to find what you're looking for." : "Every day is a new opportunity to reflect. Start writing your first journal entry."}</p>${isFiltered ? "" : '<button class="button button-primary" data-action="new-entry">Create your first journal</button>'}</div>`;
    return;
  }
  list.innerHTML = entries.map(entry => `
    <article class="journal-card">
      <div class="journal-card-top"><span class="journal-date-line">${formatDate(entry.date, { month: "long", day: "numeric", year: "numeric" })} · ${formatDate(entry.date, { weekday: "long" })}</span><span class="journal-mood">${entry.mood.emoji} ${escapeHTML(entry.mood.name)}</span></div>
      <h3 data-entry-view="${escapeHTML(entry.id)}" tabindex="0">${escapeHTML(entry.title)}</h3>
      <p class="journal-preview">${escapeHTML(entry.content)}</p>
      <div class="journal-meta"><span>${entry.updatedAt !== entry.createdAt ? "Updated" : "Written"} ${entryDateTime(entry.updatedAt)}</span><div class="card-actions">
        <button class="mini-action" data-entry-action="view" data-entry-id="${escapeHTML(entry.id)}">Read</button>
        <button class="mini-action" data-entry-action="edit" data-entry-id="${escapeHTML(entry.id)}">Edit</button>
        <button class="mini-action delete" data-entry-action="delete" data-entry-id="${escapeHTML(entry.id)}">Delete</button>
      </div></div>
    </article>`).join("");
}

function renderJournalDetail(id) {
  const entry = getEntryById(id);
  if (!entry) return null;
  const reflections = [
    ["What went well today?", entry.reflections.wentWell],
    ["What could have been better?", entry.reflections.couldImprove],
    ["What are you grateful for?", entry.reflections.gratitude],
    ["What did you learn today?", entry.reflections.learned]
  ].filter(([, answer]) => answer);
  document.getElementById("journal-detail").innerHTML = `
    <div class="detail-date">${formatDate(entry.date)}</div>
    <h1 id="detail-title">${escapeHTML(entry.title)}</h1>
    <span class="detail-mood">${entry.mood.emoji} ${escapeHTML(entry.mood.name)}</span>
    <div class="detail-content">${escapeHTML(entry.content)}</div>
    ${reflections.length ? `<section class="detail-reflections"><h2>A little more reflection</h2>${reflections.map(([prompt, answer]) => `<div class="reflection-answer"><strong>${prompt}</strong><p>${escapeHTML(answer)}</p></div>`).join("")}</section>` : ""}
    <div class="detail-meta">Created ${entryDateTime(entry.createdAt)}${entry.updatedAt !== entry.createdAt ? ` · Last updated ${entryDateTime(entry.updatedAt)}` : ""}</div>`;
  return entry;
}
return { initializeJournalFilters, renderJournalList, renderJournalDetail };
})();
