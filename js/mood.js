window.DaylightMood = (() => {
const MOODS = [
  { name: "Amazing", emoji: "😁", score: 5 },
  { name: "Happy", emoji: "😊", score: 4 },
  { name: "Good", emoji: "🙂", score: 3 },
  { name: "Neutral", emoji: "😐", score: 2 },
  { name: "Sad", emoji: "😔", score: 1 },
  { name: "Anxious", emoji: "😰", score: 1 },
  { name: "Stressed", emoji: "😫", score: 1 },
  { name: "Angry", emoji: "😡", score: 1 },
  { name: "Tired", emoji: "😴", score: 2 },
  { name: "Grateful", emoji: "🥰", score: 5 }
];

function moodByName(name) {
  return MOODS.find(mood => mood.name === name) || null;
}

function renderMoodPicker(container, selectedName, onSelect) {
  container.replaceChildren();
  for (const mood of MOODS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mood-option${mood.name === selectedName ? " selected" : ""}`;
    button.setAttribute("aria-pressed", String(mood.name === selectedName));
    button.innerHTML = `<span>${mood.emoji}</span><span>${mood.name}</span>`;
    button.addEventListener("click", () => onSelect(mood));
    container.append(button);
  }
}

function moodSummary(entries) {
  if (!entries.length) return { average: "—", common: "—", commonEmoji: "✧" };
  const average = entries.reduce((sum, entry) => sum + entry.mood.score, 0) / entries.length;
  const counts = new Map();
  entries.forEach(entry => counts.set(entry.mood.name, (counts.get(entry.mood.name) || 0) + 1));
  const mostCommon = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
  const mood = moodByName(mostCommon);
  return { average: average.toFixed(1), common: mostCommon, commonEmoji: mood?.emoji || "✧" };
}
return { MOODS, moodByName, renderMoodPicker, moodSummary };
})();
