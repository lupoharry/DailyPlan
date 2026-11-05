# Data Model

This document describes how data is structured, stored, and managed in Daylight.

## Table of Contents

- [Journal Entry Structure](#journal-entry-structure)
- [Mood Model](#mood-model)
- [Reflection Model](#reflection-model)
- [Unique ID Strategy](#unique-id-strategy)
- [Date Uniqueness](#date-uniqueness)
- [Storage Key](#storage-key)
- [Import/Export Format](#importexport-format)
- [Data Validation](#data-validation)
- [Migration & Versioning](#migration--versioning)

## Journal Entry Structure

Each journal entry is stored as a JSON object with the following properties:

```javascript
{
  // Unique identifier (UUID)
  id: "550e8400-e29b-41d4-a716-446655440000",

  // Date in ISO format (YYYY-MM-DD)
  // Enforced unique per date (one entry per calendar day)
  date: "2026-11-05",

  // Entry title (user-provided)
  title: "A Day of Reflection",

  // Mood tracking
  mood: "happy",           // Mood identifier
  moodScore: 8,            // Numeric score 1-10

  // Journal content (user-written text)
  content: "Today was a great day. I accomplished my goals...",

  // Optional reflection answers (array of strings)
  reflections: [
    "What went well? I finished my project ahead of schedule.",
    "What could be improved? I should take more breaks.",
    "What am I grateful for? My supportive team."
  ],

  // Timestamps in ISO 8601 format
  createdAt: "2026-11-05T10:30:00Z",
  updatedAt: "2026-11-05T14:45:00Z"
}
```

### Field Details

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `id` | string (UUID) | Yes | Unique per entry | Generated on creation |
| `date` | string (YYYY-MM-DD) | Yes | Unique across all entries | One per calendar day |
| `title` | string | Yes | 1-200 characters | User-provided title |
| `mood` | string | Yes | Defined mood value | See [Mood Model](#mood-model) |
| `moodScore` | number | Yes | 1-10 | Numeric representation of mood |
| `content` | string | No | Max ~50,000 characters | Main journal text |
| `reflections` | array[string] | No | Max 3 items | Optional guided questions |
| `createdAt` | ISO 8601 timestamp | Yes | Read-only | Set at creation, never changed |
| `updatedAt` | ISO 8601 timestamp | Yes | Updated on edit | Changes only on explicit edit |

### Content Guidelines

- **title**: Brief entry headline (e.g., "Monday Thoughts", "Week Recap")
- **content**: Main journal text (markdown-like, plain text acceptable)
- **reflections**: Answers to optional guided reflection prompts
- All text is escaped for safe HTML display

## Mood Model

### Available Moods

Daylight provides 10 selectable moods with visual indicators:

```javascript
const moods = [
  { id: "ecstatic", label: "Ecstatic", emoji: "🤩", score: 10, color: "#FFD700" },
  { id: "happy", label: "Happy", emoji: "😊", score: 9, color: "#FFA500" },
  { id: "content", label: "Content", emoji: "☺️", score: 8, color: "#90EE90" },
  { id: "calm", label: "Calm", emoji: "😌", score: 7, color: "#87CEEB" },
  { id: "neutral", label: "Neutral", emoji: "😐", score: 6, color: "#D3D3D3" },
  { id: "restless", label: "Restless", emoji: "😤", score: 5, color: "#FFB6C1" },
  { id: "anxious", label: "Anxious", emoji: "😰", score: 4, color: "#FF9999" },
  { id: "sad", label: "Sad", emoji: "😔", score: 3, color: "#4169E1" },
  { id: "angry", label: "Angry", emoji: "😠", score: 2, color: "#FF4500" },
  { id: "devastated", label: "Devastated", emoji: "😢", score: 1, color: "#8B0000" }
];
```

### Mood Metadata

Each mood has:
- **id** — Unique identifier used in data
- **label** — User-friendly name
- **emoji** — Visual indicator
- **score** — Numeric value (1=lowest, 10=highest) for statistics
- **color** — CSS color for calendar/charts

### Mood Score Range

- **10** — Ecstatic (best possible)
- **1** — Devastated (worst possible)
- **5-6** — Neutral zone
- Scores used for averaging and statistics

## Reflection Model

### Guided Reflections

Entries can include optional answers to reflection prompts:

```javascript
reflections: [
  "What went well today?",
  "What could have gone better?",
  "What am I grateful for?"
]
```

### Structure

- Array of strings (0-3 items typically)
- Each item is a user's answer to a reflection prompt
- Optional, can be empty
- Stored with the entry for context

### Use Cases

- Self-reflection and mindfulness
- Gratitude tracking
- Problem-solving journaling
- Identifying patterns

## Unique ID Strategy

### UUID Format

Daylight uses **UUID v4** (random unique identifiers) for entry IDs:

```
Example: 550e8400-e29b-41d4-a716-446655440000
Format:  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
         (8 digits-4-4-4-12 digits in hexadecimal)
```

### Why UUID?

- **Uniqueness**: Collision probability is negligible
- **No central registry**: Can be generated client-side
- **No correlation**: Doesn't expose creation time or sequence
- **Future-proof**: Works if data syncs across devices
- **Stateless**: No need to track ID sequences

### Generation

```javascript
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
```

## Date Uniqueness

### One Entry Per Date

Each calendar date can have **at most one journal entry**:

- The app enforces this constraint at the data layer
- If a date already has an entry, editing shows the existing entry
- Prevents duplicate entries for the same date
- Provides clear one-to-one date mapping

### Date Format

All dates use **ISO 8601 format**: `YYYY-MM-DD`

Example: `2026-11-05` (November 5, 2026)

### Date Logic

- Dates are in the user's local timezone
- Entry date is typically the date when the entry was written
- Users can create entries for past or future dates
- The date is what makes the entry unique

### Validation

When checking date uniqueness:

```javascript
// Find existing entry for date
const existingEntry = entries.find(e => e.date === targetDate);

if (existingEntry) {
  // Edit that entry instead of creating new one
}
```

## Storage Key

### Local Storage Structure

All Daylight data is stored under a single Local Storage key:

```javascript
localStorage.dailyJournalEntries
```

### Full JSON Structure

```json
{
  "dailyJournalEntries": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "date": "2026-11-05",
      "title": "Today's Entry",
      "mood": "happy",
      "moodScore": 8,
      "content": "...",
      "reflections": ["...", "...", "..."],
      "createdAt": "2026-11-05T10:30:00Z",
      "updatedAt": "2026-11-05T10:30:00Z"
    },
    {
      "id": "660f9511-f30c-52e5-b827-557766551111",
      "date": "2026-11-04",
      "title": "Yesterday",
      "mood": "content",
      "moodScore": 7,
      "content": "...",
      "reflections": [],
      "createdAt": "2026-11-04T20:15:00Z",
      "updatedAt": "2026-11-04T20:15:00Z"
    }
    // ... more entries
  ]
}
```

### Why Single Key?

- Simplicity — all data in one namespace
- Easy to export — single JSON array
- Easy to import — validate and replace
- Clear backup/restore — one file for everything

## Import/Export Format

### Export Format

When users export their data, they receive a `.json` file containing:

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "date": "2026-11-05",
    "title": "Entry Title",
    "mood": "happy",
    "moodScore": 8,
    "content": "Entry content...",
    "reflections": ["...", "...", "..."],
    "createdAt": "2026-11-05T10:30:00Z",
    "updatedAt": "2026-11-05T10:30:00Z"
  },
  {
    "id": "660f9511-f30c-52e5-b827-557766551111",
    "date": "2026-11-04",
    "title": "Previous Entry",
    "mood": "content",
    "moodScore": 7,
    "content": "...",
    "reflections": [],
    "createdAt": "2026-11-04T20:15:00Z",
    "updatedAt": "2026-11-04T20:15:00Z"
  }
]
```

### Import Validation

When importing, the app validates:

1. **Valid JSON** — File is properly formatted JSON
2. **Array Structure** — Root element is an array
3. **Entry Objects** — Each item has required fields
4. **Required Fields** — id, date, title, mood, moodScore present
5. **Data Types** — Fields have correct types
6. **Date Uniqueness** — No duplicate dates in import

### Conflict Resolution

If imported entries have dates that already exist:

- App detects conflicts
- User is prompted: replace, keep, or cancel
- If user chooses replace: existing entries are overwritten
- If user chooses keep: import is skipped
- All-or-nothing: import succeeds or fails completely

## Data Validation

### Field Validation Rules

| Field | Validation |
|-------|-----------|
| `id` | Must be valid UUID format |
| `date` | Must be ISO 8601 date (YYYY-MM-DD) |
| `title` | 1-200 characters, non-empty |
| `mood` | Must match one of defined mood IDs |
| `moodScore` | Number, 1-10 inclusive |
| `content` | String, max 50,000 characters |
| `reflections` | Array of strings, max 3 items |
| `createdAt` | Valid ISO 8601 timestamp |
| `updatedAt` | Valid ISO 8601 timestamp |

### Validation at Creation

```javascript
function validateEntry(entry) {
  if (!entry.id || !isValidUUID(entry.id)) {
    throw new Error('Invalid or missing ID');
  }
  if (!entry.date || !isValidDate(entry.date)) {
    throw new Error('Invalid or missing date');
  }
  if (!entry.title || entry.title.length < 1 || entry.title.length > 200) {
    throw new Error('Title must be 1-200 characters');
  }
  if (!validMoods.includes(entry.mood)) {
    throw new Error('Invalid mood');
  }
  if (typeof entry.moodScore !== 'number' || entry.moodScore < 1 || entry.moodScore > 10) {
    throw new Error('Mood score must be 1-10');
  }
  // ... more validations
  return true;
}
```

## Migration & Versioning

### Current Version

- **Version**: 1.0.0
- **Entry Format**: As described above

### No Breaking Changes

The current schema was designed to be extensible:

- New optional fields can be added without breaking existing data
- Old entries without new fields will work fine
- Null/undefined values are handled gracefully

### Future Considerations

If schema changes in future versions:

1. **Backward Compatibility**: New code reads old format
2. **Migration**: Optional fields default to safe values
3. **Export**: Always uses current schema
4. **Import**: Validates and normalizes old formats

### Example Future Fields (if added)

```javascript
{
  // ... existing fields ...
  tags: ["work", "personal"],           // Optional tagging
  location: "Coffee Shop",               // Optional location
  weather: "sunny",                      // Optional weather tracking
  attachments: [],                       // Optional file attachments
  sharedWith: ["friend@example.com"],   // Optional sharing (future)
  // ... etc
}
```

These could be added without breaking existing entries, which simply wouldn't have these fields.

---

For more details, see:
- [Architecture](./ARCHITECTURE.md) — Technical architecture
- [User Guide](./USER_GUIDE.md) — How users interact with the data
