window.DaylightCalendar = (() => {
const { getAllEntries } = window.DaylightStorage;
const { formatDate, localDateString, escapeHTML } = window.DaylightUtils;

let visibleMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let selectedDate = localDateString();

function initializeCalendar(onOpenDate) {
  document.getElementById("calendar-prev").addEventListener("click", () => { visibleMonth.setMonth(visibleMonth.getMonth() - 1); renderCalendar(onOpenDate); });
  document.getElementById("calendar-next").addEventListener("click", () => { visibleMonth.setMonth(visibleMonth.getMonth() + 1); renderCalendar(onOpenDate); });
  document.getElementById("calendar-today").addEventListener("click", () => { visibleMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1); selectedDate = localDateString(); renderCalendar(onOpenDate); });
  document.getElementById("calendar-grid").addEventListener("click", event => {
    const day = event.target.closest("[data-calendar-date]");
    if (!day) return;
    selectedDate = day.dataset.calendarDate;
    const entry = getAllEntries().find(item => item.date === selectedDate);
    renderCalendar(onOpenDate);
    onOpenDate(selectedDate, entry);
  });
  renderCalendar(onOpenDate);
}

function renderCalendar(onOpenDate) {
  const entries = getAllEntries();
  const entryMap = new Map(entries.map(entry => [entry.date, entry]));
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  document.getElementById("calendar-month-label").textContent = new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(visibleMonth);
  const firstDay = new Date(year, month, 1);
  const start = new Date(year, month, 1 - firstDay.getDay());
  const today = localDateString();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => `<div class="calendar-weekday">${day}</div>`);
  const days = [];
  for (let index = 0; index < 42; index++) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = localDateString(date);
    const entry = entryMap.get(key);
    const classes = ["calendar-day", date.getMonth() !== month ? "outside" : "", key === today ? "today" : "", key === selectedDate ? "selected" : ""].filter(Boolean).join(" ");
    days.push(`<button class="${classes}" type="button" data-calendar-date="${key}" aria-label="${formatDate(key)}${entry ? `, ${entry.mood.name} entry` : ", no entry"}">${date.getDate()}${entry ? `<span class="day-emoji">${entry.mood.emoji}</span><i class="entry-dot"></i>` : ""}</button>`);
  }
  document.getElementById("calendar-grid").innerHTML = weekdays.concat(days).join("");
  const thisMonth = entries.filter(entry => entry.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}-`)).sort((a, b) => a.date.localeCompare(b.date));
  document.getElementById("calendar-summary-title").textContent = `${thisMonth.length} ${thisMonth.length === 1 ? "entry" : "entries"} this month`;
  document.getElementById("calendar-summary").textContent = thisMonth.length ? "A collection of moments from this month." : "Your month is still unwritten. Choose a day to begin.";
  document.getElementById("calendar-month-entries").innerHTML = thisMonth.slice(0, 5).map(entry => `<div class="calendar-entry-link" role="button" tabindex="0" data-open-entry="${escapeHTML(entry.id)}"><span>${entry.mood.emoji}</span><div><strong>${escapeHTML(entry.title)}</strong><small>${formatDate(entry.date, { month: "short", day: "numeric", weekday: "short" })}</small></div></div>`).join("");
}
return { initializeCalendar, renderCalendar };
})();
