# Daylight — Daily Journal with Mood Tracker

Daylight is a calm, responsive journaling app for recording a daily entry, tracking a mood, and revisiting personal reflections. It runs in the browser with no server, framework, or build step.

## Features

- Dashboard with entry count, writing streak, average and most common mood, the latest seven days, and recent entries.
- Journal creation and editing for any past, present, or future date, with one entry per calendar day.
- Ten selectable moods, optional guided reflections, and character count.
- Search and combined date, month, mood, and sort filters.
- Calendar with entry and mood indicators, plus direct links into entries.
- Detail view, edit, delete confirmation, and empty states.
- JSON export and validated JSON import (matching dates are updated).
- All data remains in browser Local Storage; no backend or account is required.
- Responsive layouts, keyboard focus support, and safe display of user-entered text.

## Technology

- HTML5, CSS3, and vanilla JavaScript (ES6+).
- Browser Local Storage for persistence.
- Google Fonts (DM Sans and Manrope); the app otherwise has no runtime package dependencies.

## Folder structure

```text
.
├── index.html
├── css/
│   ├── styles.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── storage.js
│   ├── journal.js
│   ├── mood.js
│   ├── dashboard.js
│   ├── calendar.js
│   └── utils.js
└── assets/
    └── icons/
        └── daylight.svg
```

## Run locally

Open `index.html` in a modern browser. No installation, build, backend, or local web server is required. Internet access is only needed to load the optional Google Fonts; system fonts are used as fallback.

## Local Storage

Entries are stored under the `dailyJournalEntries` key as a JSON array. Each entry contains an ID, calendar date, title, mood and score, journal content, reflection answers, and creation/update timestamps. The app preserves one entry per date and keeps its original creation timestamp when edited. Browser storage is specific to the browser profile and device; clearing browser site data also deletes the journal.

## Export and import

Open **Data & settings** to download a JSON backup or import a previous backup. The app checks the complete imported list before writing it. A malformed file is rejected without changing existing entries; entries with dates that already exist are replaced after confirmation. Consider exporting regularly if you want a portable backup.
