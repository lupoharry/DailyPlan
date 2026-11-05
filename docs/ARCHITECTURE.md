# Architecture

This document describes the technical architecture of Daylight, how it's organized, and how data flows through the application.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Technology Stack](#technology-stack)
- [Module Organization](#module-organization)
- [Data Flow](#data-flow)
- [Component Structure](#component-structure)
- [Navigation & Routing](#navigation--routing)
- [Local Storage Integration](#local-storage-integration)
- [Key Design Decisions](#key-design-decisions)

## Architecture Overview

Daylight is a single-page application (SPA) built with vanilla JavaScript, CSS, and HTML. It uses browser Local Storage as its database and runs entirely in the browser with no backend dependencies.

```
┌─────────────────────────────────────────────────────┐
│         Browser (Client-Side Only)                  │
├─────────────────────────────────────────────────────┤
│  index.html                                         │
│  ├─ Header & Navigation                             │
│  ├─ Main View Container (dynamically updated)       │
│  └─ Modal Containers                                │
├─────────────────────────────────────────────────────┤
│  JavaScript Modules                                 │
│  ├─ app.js (initialization & main controller)       │
│  ├─ navigation.js (routing & view switching)        │
│  ├─ storage.js (Local Storage operations)           │
│  ├─ journal.js (CRUD operations)                    │
│  ├─ mood.js (mood tracking logic)                   │
│  ├─ dashboard.js (statistics & overview)            │
│  ├─ calendar.js (calendar view & interactions)      │
│  └─ utils.js (helper functions)                     │
├─────────────────────────────────────────────────────┤
│  CSS Modules                                        │
│  ├─ styles.css (core & layout)                      │
│  ├─ components.css (component styles)               │
│  └─ responsive.css (media queries)                  │
├─────────────────────────────────────────────────────┤
│  Browser APIs                                       │
│  ├─ Local Storage (data persistence)                │
│  ├─ Date API (date calculations)                    │
│  ├─ JSON (serialization)                            │
│  └─ Fetch (optional fonts)                          │
└─────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend

- **HTML5** — Semantic markup and structure
- **CSS3** — Styling, layout (Grid/Flexbox), animations
- **JavaScript (ES6+)** — Application logic and interactivity
- **Google Fonts** — Typography (DM Sans, Manrope)

### Storage

- **Browser Local Storage** — Persistent data (key: `dailyJournalEntries`)

### No Dependencies

- No npm packages
- No build tools (no webpack, babel, etc.)
- No framework (React, Vue, Angular)
- No backend (no server, API, or database)

## Module Organization

### app.js

**Purpose**: Application initialization and main controller

**Key Functions**:
- `initializeApp()` — Boots the application
- `handleNavigation(view, data)` — Routes to different views
- `render(view, data)` — Updates DOM based on current state

**Exports**: Application state, navigation methods

### navigation.js

**Purpose**: Handles routing and view switching without page reload

**Key Functions**:
- `navigateTo(view, params)` — Changes current view
- `getCurrentView()` — Returns active view name
- `updateBreadcrumbs()` — Updates navigation display

**Views**:
- `dashboard` — Overview with stats and recent entries
- `journal` — List of all journal entries
- `journal-detail` — Single entry view
- `journal-edit` — Create/edit entry form
- `calendar` — Calendar view with mood indicators
- `search` — Search and filter results
- `settings` — Data backup/restore

### storage.js

**Purpose**: Handles all Local Storage operations

**Key Functions**:
- `loadEntries()` — Retrieves all entries from Local Storage
- `saveEntries(entries)` — Writes entries to Local Storage
- `getEntry(id)` — Retrieves single entry by ID
- `createEntry(data)` — Creates new entry with validation
- `updateEntry(id, data)` — Updates existing entry
- `deleteEntry(id)` — Removes entry
- `exportData()` — Returns all data as JSON
- `importData(json)` — Validates and imports JSON data

**Data Structure**:
```javascript
{
  dailyJournalEntries: [
    {
      id: "uuid-string",
      date: "YYYY-MM-DD",
      title: "Entry Title",
      mood: "happy",
      moodScore: 8,
      content: "Journal text...",
      reflections: ["Answer 1", "Answer 2"],
      createdAt: "2026-11-05T10:30:00Z",
      updatedAt: "2026-11-05T10:30:00Z"
    },
    // ... more entries
  ]
}
```

### journal.js

**Purpose**: Journal entry CRUD operations

**Key Functions**:
- `getEntries(filters)` — Retrieves entries with optional filters
- `getEntriesByDateRange(start, end)` — Returns entries in date range
- `getEntriesByMood(mood)` — Filters entries by mood
- `createEntry(title, mood, content, reflections)` — Creates new entry
- `updateEntry(id, updates)` — Updates existing entry
- `deleteEntry(id)` — Deletes entry with confirmation
- `searchEntries(query)` — Full-text search across title and content
- `getRecentEntries(count)` — Returns most recent N entries
- `getEntriesForDate(date)` — Gets entry for specific date

### mood.js

**Purpose**: Mood tracking and mood-related logic

**Key Functions**:
- `getMoodData()` — Returns available moods with emojis
- `calculateMoodStats(entries)` — Calculates mood statistics
- `getMostCommonMood(entries)` — Returns most frequent mood
- `getAverageMoodScore(entries)` — Returns average mood score
- `getMoodColor(mood)` — Returns CSS color for mood

**Mood Definitions**:
- 10 selectable moods with emojis
- Each mood has color, label, and score

### dashboard.js

**Purpose**: Dashboard view logic and calculations

**Key Functions**:
- `renderDashboard()` — Renders dashboard view
- `calculateStats()` — Calculates all dashboard statistics
- `calculateWritingStreak()` — Days of consecutive entries
- `getRecentEntryCount()` — Count from past 7 days
- `getMoodBreakdown()` — Mood distribution data

**Displays**:
- Total entry count
- Writing streak
- Average mood score
- Most common mood
- Recent 7 days summary
- Recent entries list

### calendar.js

**Purpose**: Calendar view and date-based navigation

**Key Functions**:
- `renderCalendar(year, month)` — Renders calendar grid
- `getCalendarDays(year, month)` — Returns calendar structure
- `markEntryDates(entries)` — Marks dates with entries
- `markMoodDates(entries)` — Adds mood indicators
- `navigateMonth(direction)` — Previous/next month
- `selectDate(date)` — Selects date for entry creation

**Features**:
- Visual indicators for dates with entries
- Mood emoji indicators
- Month/year navigation
- Click-to-create-entry functionality

### utils.js

**Purpose**: Shared utility functions

**Key Functions**:
- `generateUUID()` — Creates unique identifiers
- `formatDate(date)` — Formats dates consistently
- `parseDate(string)` — Parses date strings
- `sanitizeHTML(html)` — Escapes HTML for safe display
- `debounce(fn, wait)` — Debounces function calls
- `throttle(fn, wait)` — Throttles function calls
- `getCurrentDate()` — Returns today's date in app format
- `isToday(date)` — Checks if date is today
- `daysAgo(date)` — Calculates days since date
- `calculateStreak(entries)` — Calculates consecutive days

## Data Flow

### Creating a Journal Entry

```
User Input (Form)
  ↓
journal.js: createEntry()
  ↓
storage.js: createEntry() [validation]
  ↓
Local Storage: Save data
  ↓
navigation.js: navigateTo('journal-detail', {entryId})
  ↓
Render updated view
```

### Editing an Entry

```
User clicks Edit
  ↓
journal.js: getEntry(id)
  ↓
Populate form with current data
  ↓
User submits form
  ↓
journal.js: updateEntry(id, newData)
  ↓
storage.js: updateEntry() [validation]
  ↓
Local Storage: Update data
  ↓
Render updated detail view
```

### Searching/Filtering

```
User enters search query or filters
  ↓
journal.js: searchEntries(query) OR getEntries(filters)
  ↓
Apply filters: date range, mood, sort
  ↓
Return matching entries
  ↓
dashboard.js or other view: renderResults()
  ↓
Display filtered results
```

### Exporting Data

```
User clicks Export
  ↓
storage.js: exportData()
  ↓
Return all entries as JSON
  ↓
Create blob and download file
  ↓
Browser downloads JSON file
```

### Importing Data

```
User selects import file
  ↓
storage.js: validateImportJSON(json)
  ↓
Check format and structure
  ↓
Prompt user for conflicts
  ↓
storage.js: importData(json)
  ↓
Merge with existing entries
  ↓
Save to Local Storage
  ↓
Reload entries
```

## Component Structure

### HTML Hierarchy

```html
<body>
  <div class="container">
    <!-- Header & Navigation -->
    <header class="app-header">
      <nav class="app-nav">
        <!-- Navigation links -->
      </nav>
    </header>

    <!-- Main Content Area (dynamically updated) -->
    <main class="app-main" id="app-root">
      <!-- Views render here -->
      <div id="view-container">
        <!-- Current view content -->
      </div>
    </main>

    <!-- Modals -->
    <div id="modal-container">
      <!-- Delete confirmation, etc. -->
    </div>

    <!-- Toast notifications -->
    <div id="toast-container"></div>
  </div>
</body>
```

### CSS Module Breakdown

**styles.css** (Core)
- CSS variables (colors, spacing, fonts)
- Global typography and resets
- Layout framework (Grid/Flexbox)
- Common patterns and utilities

**components.css** (Components)
- Card and container styles
- Button variants
- Form elements
- Modal styles
- Mood indicators
- Calendar styles

**responsive.css** (Responsive)
- Tablet breakpoints (768px)
- Mobile breakpoints (375px)
- Flexible layouts
- Touch-friendly sizing

### Key CSS Features

- **CSS Custom Properties** for theming
- **CSS Grid** for main layouts
- **Flexbox** for component layouts
- **CSS Transitions** for smooth animations
- **Media Queries** for responsive design

## Navigation & Routing

### Navigation Flow

The app implements client-side routing without page reloads:

```
URL /index.html (single entry point)
  ↓
app.js initialization
  ↓
Parse location hash (e.g., #/journal/view/123)
  ↓
navigation.js: navigateTo()
  ↓
Update DOM with appropriate view
  ↓
No page reload (SPA behavior)
```

### View Routes

- `#/` — Dashboard
- `#/journal` — Journal list
- `#/journal/create` — Create new entry
- `#/journal/view/:id` — View entry detail
- `#/journal/edit/:id` — Edit entry
- `#/calendar` — Calendar view
- `#/search` — Search/filter view
- `#/settings` — Data backup/restore

### Navigation State

State persists in:
- JavaScript variables (runtime)
- URL hash (browser history)
- Local Storage (data persistence)

## Local Storage Integration

### Storage Key

All data stored under single key: `dailyJournalEntries`

### Data Format

```javascript
localStorage.dailyJournalEntries = JSON.stringify([
  { id, date, title, mood, moodScore, content, reflections, createdAt, updatedAt },
  // ... more entries
])
```

### Storage Operations

- **Read**: Parse JSON from Local Storage at app start
- **Write**: JSON.stringify and save after mutations
- **Sync**: All changes written immediately
- **Size**: Typically <1MB for 1000+ entries

### Limitations

- ~5-10MB per browser origin (browser dependent)
- Unencrypted plaintext storage
- Specific to browser and device
- Cleared when browser cache/cookies cleared

## Key Design Decisions

### 1. Single JavaScript File vs. Modules

**Decision**: Separate files by concern (storage, journal, mood, etc.)

**Rationale**:
- Better code organization and maintainability
- Clearer responsibilities per module
- Easier to test and debug
- Still vanilla JS with no bundler needed

### 2. Client-Side Routing

**Decision**: Hash-based routing without page reloads

**Rationale**:
- No backend required
- Browser history/back button works
- Instant view switching
- Better UX than full page reloads

### 3. Local Storage vs. IndexedDB

**Decision**: Use Local Storage for simplicity

**Rationale**:
- Simpler API and debugging
- Sufficient for journal data size
- Direct JSON serialization
- Adequate performance

### 4. Vanilla JavaScript vs. Framework

**Decision**: No framework (vanilla ES6+)

**Rationale**:
- No dependencies or build process
- Direct browser API learning
- Smaller bundle size (just HTML/CSS/JS)
- Can run offline after initial load
- Production-quality without framework overhead

### 5. One Entry Per Date

**Decision**: Enforce one-entry-per-date constraint

**Rationale**:
- Simpler mental model for users
- Cleaner calendar visualization
- Prevents date conflicts
- But allows editing full content

### 6. UUID for Entry IDs

**Decision**: Use UUID instead of timestamps

**Rationale**:
- Unique across devices and sessions
- No collision risk
- Not affected by clock changes
- Better for future multi-device sync

---

For more details, see:
- [Data Model](./DATA_MODEL.md) — Entry structure and formats
- [User Guide](./USER_GUIDE.md) — How users interact with the app
- [Contributing](../CONTRIBUTING.md) — Development guidelines
