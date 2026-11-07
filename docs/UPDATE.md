# Current Implementation Update

This document summarizes the behavior present in the current Daylight source. It is an implementation snapshot, not a dated release announcement; see the [changelog](../CHANGELOG.md) for release history.

## Journal and mood tracking

- Entries have a date, title, mood, journal text, and four optional reflection answers.
- The app allows one entry per date. Entries can be created, edited, viewed, and deleted.
- The ten available moods are Amazing, Happy, Good, Neutral, Sad, Anxious, Stressed, Angry, Tired, and Grateful.
- The dashboard displays journal and mood summaries. The calendar provides a date-based view of entries.

## Finding and managing entries

- The journal list searches titles and journal text and can be filtered by exact date, month, or mood.
- Entries can be sorted newest first or oldest first.
- Export downloads all saved entries as a JSON file.
- Import accepts a JSON array with up to 10,000 entries. Each entry is validated, dates must be unique within the import, and imported entries replace saved entries with matching dates.

## Runtime and storage

Daylight is a static HTML, CSS, and vanilla JavaScript application with no required build tools, package manager, server, or database. It stores entries in browser Local Storage under `dailyJournalEntries`. The app does not transmit journal entries to a backend; Google Fonts are an optional external resource loaded by the page.

Local Storage and exported JSON are not encrypted, and browser storage is specific to the browser and site origin. Export a backup before clearing site data or moving to another browser or device.
