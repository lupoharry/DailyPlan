window.DaylightDashboard = (() => {
const { getAllEntries, getEntryByDate } = window.DaylightStorage;
const { moodSummary } = window.DaylightMood;
const { formatDate, localDateString, escapeHTML } = window.DaylightUtils;

function writingStreak(entries) {
  const dates = new Set(entries.map(entry => entry.date));
  const today = new Date();
  if (!dates.has(localDateString(today))) today.setDate(today.getDate() - 1);
  let streak = 0;
  while (dates.has(localDateString(today))) {
    streak += 1;
    today.setDate(today.getDate() - 1);
  }
  return streak;
}

function renderDashboard() {
  const entries = getAllEntries();
  const now = new Date();
  const hour = now.getHours();
  document.getElementById("dashboard-title").innerHTML =
    `${hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"}<span class="heading-period">.</span>`;
  document.getElementById("current-date").textContent = new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric" }).format(now).toUpperCase();
  const average = moodSummary(entries);
  const stats = [
    ["Journal entries", String(entries.length), "moments captured", "▤"],
    ["Writing streak", `${writingStreak(entries)} ${writingStreak(entries) === 1 ? "day" : "days"}`, "keep showing up", "↗"],
    ["Average mood", average.average, "out of 5.0", "☼"],
    ["Most common mood", average.common, average.commonEmoji, average.commonEmoji]
  ];
  document.getElementById("stats-grid").innerHTML = stats.map(([label, value, caption, icon]) =>
    `<article class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon}</span></div><strong class="stat-value">${escapeHTML(value)}</strong><div class="stat-caption">${escapeHTML(caption)}</div></article>`
  ).join("");

  const today = localDateString();
  const todayEntry = getEntryByDate(today);
  const todayButton = document.getElementById("today-entry-button");
  todayButton.textContent = todayEntry ? "✎ Edit today's journal" : "＋ Add today's journal";
  todayButton.dataset.action = "today-entry";

  const moodWeek = document.getElementById("mood-week");
  const weekDays = [];
  for (let offset = 6; offset >= 0; offset--) {
    const day = new Date();
    day.setDate(day.getDate() - offset);
    const date = localDateString(day);
    const entry = entries.find(item => item.date === date);
    weekDays.push(`<div class="mood-day${entry ? " has-entry" : ""}" title="${entry ? `${escapeHTML(entry.mood.name)} — ${escapeHTML(entry.title)}` : "No entry"}"><span class="mood-day-icon">${entry ? entry.mood.emoji : "·"}</span><span class="mood-day-name">${new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(day)}</span></div>`);
  }
  moodWeek.innerHTML = weekDays.join("");

  const recent = [...entries].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  const recentContainer = document.getElementById("recent-entries");
  recentContainer.innerHTML = recent.length ? recent.map(entry =>
    `<div class="recent-item" role="button" tabindex="0" data-open-entry="${escapeHTML(entry.id)}"><span class="recent-mood">${entry.mood.emoji}</span><div><h4>${escapeHTML(entry.title)}</h4><p>${escapeHTML(entry.content)}</p></div><span class="recent-date">${formatDate(entry.date, { month: "short", day: "numeric" })}</span></div>`
  ).join("") : `<div class="empty-state compact-empty"><div class="empty-illustration">✧</div><h3>Your story starts here</h3><p>Write your first entry and watch your reflections grow.</p><button class="button button-primary" data-action="today-entry">Write today's entry</button></div>`;
}
return { renderDashboard };
})();
