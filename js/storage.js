window.DaylightStorage = (() => {
const STORAGE_KEY = "dailyJournalEntries";
const MOOD_DEFINITIONS = {
  Amazing: ["😁", 5], Happy: ["😊", 4], Good: ["🙂", 3], Neutral: ["😐", 2],
  Sad: ["😔", 1], Anxious: ["😰", 1], Stressed: ["😫", 1], Angry: ["😡", 1],
  Tired: ["😴", 2], Grateful: ["🥰", 5]
};

function isValidDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function normalizeEntry(entry) {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) throw new Error("An entry must be an object.");
  if (!isValidDate(entry.date)) throw new Error("Every entry must have a valid calendar date.");
  if (typeof entry.title !== "string" || !entry.title.trim()) throw new Error("Every entry needs a title.");
  if (typeof entry.content !== "string" || !entry.content.trim()) throw new Error("Every entry needs journal content.");
  const moodDefinition = entry.mood && Object.prototype.hasOwnProperty.call(MOOD_DEFINITIONS, entry.mood.name)
    ? MOOD_DEFINITIONS[entry.mood.name]
    : null;
  if (!moodDefinition || entry.mood.emoji !== moodDefinition[0] || entry.mood.score !== moodDefinition[1]) {
    throw new Error("Every entry must have a valid mood.");
  }
  const reflections = entry.reflections && typeof entry.reflections === "object" ? entry.reflections : {};
  const now = new Date().toISOString();
  return {
    id: typeof entry.id === "string" && entry.id ? entry.id : createId(),
    date: entry.date,
    title: entry.title.trim(),
    mood: { name: entry.mood.name, emoji: entry.mood.emoji, score: entry.mood.score },
    content: entry.content,
    reflections: {
      wentWell: typeof reflections.wentWell === "string" ? reflections.wentWell : "",
      couldImprove: typeof reflections.couldImprove === "string" ? reflections.couldImprove : "",
      gratitude: typeof reflections.gratitude === "string" ? reflections.gratitude : "",
      learned: typeof reflections.learned === "string" ? reflections.learned : ""
    },
    createdAt: typeof entry.createdAt === "string" ? entry.createdAt : now,
    updatedAt: typeof entry.updatedAt === "string" ? entry.updatedAt : now
  };
}

function createId() {
  return globalThis.crypto?.randomUUID?.() || `entry-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function getAllEntries() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error("Saved journal data is not a list.");
    const entries = [];
    const dates = new Set();
    for (const item of parsed) {
      try {
        const entry = normalizeEntry(item);
        if (dates.has(entry.date)) continue;
        dates.add(entry.date);
        entries.push(entry);
      } catch (error) {
        console.warn("Skipping an invalid saved journal entry:", error.message);
      }
    }
    return entries.sort((a, b) => b.date.localeCompare(a.date));
  } catch (error) {
    console.warn("Saved journal data could not be read:", error.message);
    return [];
  }
}

function getEntryById(id) {
  return getAllEntries().find(entry => entry.id === id) || null;
}

function getEntryByDate(date) {
  return getAllEntries().find(entry => entry.date === date) || null;
}

function saveEntry(entry) {
  const normalized = normalizeEntry(entry);
  const entries = getAllEntries();
  const existing = entries.find(item => item.date === normalized.date);
  const now = new Date().toISOString();
  const saved = existing
    ? { ...normalized, id: existing.id, createdAt: existing.createdAt, updatedAt: now }
    : { ...normalized, createdAt: now, updatedAt: now };
  const next = existing
    ? entries.map(item => item.id === existing.id ? saved : item)
    : [...entries, saved];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return saved;
}

function updateEntry(id, updatedEntry) {
  const entries = getAllEntries();
  const existing = entries.find(item => item.id === id);
  if (!existing) throw new Error("This journal entry no longer exists.");
  const normalized = normalizeEntry({ ...existing, ...updatedEntry, id, createdAt: existing.createdAt });
  const dateOwner = entries.find(item => item.date === normalized.date && item.id !== id);
  if (dateOwner) throw new Error("Another journal entry already exists for that date.");
  const next = entries
    .filter(item => item.id !== id)
    .concat({ ...normalized, createdAt: existing.createdAt, updatedAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next.find(item => item.id === id);
}

function deleteEntry(id) {
  const entries = getAllEntries();
  const next = entries.filter(entry => entry.id !== id);
  if (next.length === entries.length) return false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return true;
}

function clearAllEntries() {
  localStorage.removeItem(STORAGE_KEY);
}

function getEntriesByMonth(year, month) {
  const prefix = `${year}-${String(month).padStart(2, "0")}-`;
  return getAllEntries().filter(entry => entry.date.startsWith(prefix));
}

function importEntries(data) {
  if (!Array.isArray(data) || data.length > 10000) throw new Error("The JSON file must contain a list of up to 10,000 journal entries.");
  const imported = data.map(normalizeEntry);
  const dates = new Set();
  for (const entry of imported) {
    if (dates.has(entry.date)) throw new Error(`The file contains more than one entry for ${entry.date}.`);
    dates.add(entry.date);
  }
  const existing = getAllEntries();
  const merged = new Map(existing.map(entry => [entry.date, entry]));
  for (const entry of imported) {
    const previous = merged.get(entry.date);
    merged.set(entry.date, previous
      ? { ...entry, id: previous.id, createdAt: previous.createdAt, updatedAt: new Date().toISOString() }
      : entry);
  }
  const result = [...merged.values()].sort((a, b) => b.date.localeCompare(a.date));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  return imported.length;
}
return { getAllEntries, getEntryById, getEntryByDate, saveEntry, updateEntry, deleteEntry, clearAllEntries, getEntriesByMonth, importEntries };
})();
