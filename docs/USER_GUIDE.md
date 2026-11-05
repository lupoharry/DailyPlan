# User Guide

Welcome to Daylight! This guide explains how to use all features of the journaling app.

## Table of Contents

- [Getting Started](#getting-started)
- [Dashboard](#dashboard)
- [Creating Journal Entries](#creating-journal-entries)
- [Editing Entries](#editing-entries)
- [Mood Tracking](#mood-tracking)
- [Using the Calendar](#using-the-calendar)
- [Searching & Filtering](#searching--filtering)
- [Export & Import](#export--import)
- [Managing Your Data](#managing-your-data)
- [Tips & Best Practices](#tips--best-practices)

## Getting Started

### Accessing Daylight

1. Open `index.html` in any modern web browser
2. No installation, login, or account required
3. Data is stored locally on your device (private and secure)

### First Visit

- The app starts with an empty journal
- You'll see the Dashboard with prompts to create your first entry
- Click "Create Entry" to start journaling

### Browser Requirements

- Chrome, Firefox, Safari, or Edge (2018 or newer)
- JavaScript must be enabled
- Local Storage must be available

## Dashboard

The Dashboard is your home screen showing an overview of your journaling activity.

### Dashboard Statistics

**Top Section:**
- **Total Entries** — Count of all entries you've written
- **Writing Streak** — Number of consecutive days with an entry (today counts)
- **Average Mood** — Average mood score across all entries
- **Most Common Mood** — The mood you select most frequently

### Recent Activity

**Last 7 Days:**
- Visual summary of the past week
- Mood indicators for each day
- Click on a day to view or edit that entry

**Recent Entries List:**
- Shows your 5-10 most recent entries
- Click an entry to view full details
- Quickly jump back to recent thoughts

### Navigation

From the Dashboard, you can:
- **Create Entry** — Button to write a new entry
- **View Journal** — See all entries in list view
- **Open Calendar** — Navigate by calendar dates
- **Search** — Find entries by text or filter by mood/date

## Creating Journal Entries

### Starting a New Entry

**Option 1: From Dashboard**
- Click "Create Entry" button

**Option 2: From Navigation**
- Click "Journal" then "New Entry"

**Option 3: From Calendar**
- Click on any date in the calendar

### Entry Form

The entry form has these fields:

**Entry Title** (Required)
- Brief headline or summary (e.g., "Monday Thoughts", "Great Day")
- 1-200 characters
- Appears in lists and search results

**Select Your Mood** (Required)
- Choose from 10 emotions: Ecstatic, Happy, Content, Calm, Neutral, Restless, Anxious, Sad, Angry, Devastated
- Visual emoji indicator for each mood
- Affects your mood statistics

**Journal Content** (Optional)
- Write freely about your day, thoughts, feelings
- No character limit (typically up to ~50,000 characters)
- Formatting: Use plain text or line breaks
- Character counter shows length

**Reflection Prompts** (Optional)
- Three guided questions to deepen reflection:
  1. "What went well today?"
  2. "What could have gone better?"
  3. "What are you grateful for?"
- Answer one, some, or all
- Helps practice gratitude and mindfulness

### Entry Date

- Entries are created for **today** by default
- You can change the date to any past or future date
- **One entry per day maximum** — if a date has an entry, you'll edit it instead of creating new

### Saving an Entry

- Click "Save Entry" button to save
- Entry appears immediately in your journal
- Data is saved to Local Storage (encrypted by your browser)
- No internet required

### Example Entry

**Title:** Monday Reflections

**Mood:** Happy 😊

**Content:** 
```
Today was productive. I finished the project I've been working on 
and got great feedback from my team. Looking forward to the next phase.
```

**Reflections:**
- What went well? Finishing the major milestone and team collaboration
- What could have gone better? I should have taken more breaks
- What are you grateful for? Great team and supportive leadership

## Editing Entries

### Finding an Entry to Edit

**Option 1: From Journal List**
- Click "Journal" in navigation
- Click on an entry to view it
- Click "Edit" button

**Option 2: From Dashboard**
- Click a recent entry in the list
- Click "Edit" button

**Option 3: From Calendar**
- Click on a date with an entry
- Click "Edit" button

### Making Changes

- All entry fields can be edited
- Title, mood, content, and reflections can all be updated
- Changes are saved immediately when you click "Save Changes"
- Original creation date is preserved; update date is recorded

### Changing the Date

- You can change an entry's date when editing
- If you move an entry to a date that already has an entry:
  - The app will show an error
  - You must delete one of the entries first
  - Or move to a different date

### Example: Backdating an Entry

If you forgot to journal yesterday:
1. Click "Journal" or open the Calendar
2. Create a new entry
3. Change the date to yesterday
4. Write your entry
5. Save

## Mood Tracking

### Available Moods

Daylight tracks 10 distinct moods:

| Mood | Emoji | Score | Use When |
|------|-------|-------|----------|
| Ecstatic | 🤩 | 10 | Extremely happy, elated |
| Happy | 😊 | 9 | Joy, positive, energetic |
| Content | ☺️ | 8 | Satisfied, peaceful, good |
| Calm | 😌 | 7 | Relaxed, composed, at ease |
| Neutral | 😐 | 6 | Okay, neither good nor bad |
| Restless | 😤 | 5 | Unsettled, frustrated, agitated |
| Anxious | 😰 | 4 | Worried, nervous, stressed |
| Sad | 😔 | 3 | Unhappy, discouraged, low |
| Angry | 😠 | 2 | Upset, frustrated, hostile |
| Devastated | 😢 | 1 | Extremely sad, heartbroken |

### Why Mood Tracking?

- **Pattern Recognition** — See what affects your emotional state
- **Statistics** — Track your average mood over time
- **Reflection** — Connect emotions to events and situations
- **Mental Health** — Monitor wellbeing trends
- **Gratitude** — Remember happy days and good moments

### Mood Statistics

The Dashboard shows:
- **Average Mood Score** — Mean mood across all entries (1-10)
- **Most Common Mood** — The mood you experience most often
- **Weekly Breakdown** — Mood distribution for the past 7 days

### Filtering by Mood

Use the Search/Filter view to:
- See all entries for a specific mood
- Combine mood filter with date range
- Find patterns in your emotional states

## Using the Calendar

The Calendar view provides a month-by-month overview of your entries.

### Calendar View

- **Visual Grid** — Full month displayed at once
- **Entry Indicators** — Dates with entries are highlighted
- **Mood Emojis** — Each date shows the mood emoji for that entry
- **Current Date** — Today's date is marked

### Navigation

- **Next Month** / **Previous Month** — Navigate between months
- **Month/Year Display** — Shows current month and year

### Interacting with Dates

- **Click a Date with Entry** — View or edit that entry
- **Click Empty Date** — Create new entry for that date
- **Future Dates** — Can create entries for future dates (journaling plans, goals)

### Calendar Use Cases

- **Monthly Review** — See your mood at a glance
- **Journaling Habits** — Identify patterns and streaks
- **Quick Navigation** — Jump to any date
- **Planning** — Reflect on upcoming events

## Searching & Filtering

The Search view helps you find entries quickly and identify patterns.

### Full-Text Search

**How to Search:**
1. Click "Search" in navigation
2. Enter keywords in the search box
3. Results show all entries matching your query

**What It Searches:**
- Entry titles
- Journal content
- Reflection answers

**Examples:**
- Search "birthday" to find all birthday-related entries
- Search "team" to see work entries mentioning your team
- Search "grateful" to find entries with gratitude

### Filtering

Combine multiple filters:

**By Mood:**
- Select one mood to show only entries with that mood
- Great for mood trend analysis

**By Date Range:**
- Choose start and end dates
- See entries from a specific period
- Use for monthly or seasonal reviews

**By Month:**
- Select a specific month (e.g., "November 2026")
- Quick way to review a month

### Sorting

Results can be sorted:
- **Newest First** — Most recent entries at top
- **Oldest First** — Chronological oldest first
- **Best Mood First** — Happiest entries first
- **Worst Mood First** — Saddest entries first

### Advanced Filtering

Combine filters for detailed views:
- "Show me all Happy 😊 entries from August"
- "Find Anxious 😰 entries from the last 3 months"
- "Show entries with 'work' keyword from October, sorted best mood first"

### Using Search Results

From results, you can:
- Click any entry to view full details
- Edit or delete entries
- Identify emotional patterns
- Plan follow-up reflections

## Export & Import

### Exporting Your Data

**Why Export?**
- Backup your journal
- Transfer to another device
- Archive years of writing
- Share with someone (with privacy consideration)

**How to Export:**
1. Click "Settings" or "Data & Settings"
2. Click "Export Data" button
3. Browser downloads a `.json` file
4. File is named with date: `daylight-backup-2026-11-05.json`

**File Contents:**
- Complete journal entries
- All moods, content, and reflections
- Creation and update dates
- One entry per line, JSON formatted

**Important Notes:**
- Export includes ALL entries
- File is JSON (readable in text editor)
- Back up your computer to protect backups
- No password protection in file (keep backups secure)

### Importing Data

**Why Import?**
- Restore from backup
- Migrate from another journaling app
- Load data on new device
- Recover deleted entries (if you have backup)

**How to Import:**
1. Click "Settings" or "Data & Settings"
2. Click "Import Data" button
3. Select a JSON file from your computer
4. Review the import summary
5. Confirm import or cancel

**Import Validation:**
- App checks file format before importing
- Validates all entries have required fields
- Detects duplicate dates
- Reports errors clearly

**Conflict Resolution:**
If imported entries have dates that already exist:
1. App shows which dates conflict
2. You choose: Replace, Keep, or Cancel
3. "Replace" overwrites existing entries for those dates
4. "Keep" skips conflicting entries
5. Import is all-or-nothing (entire import succeeds or fails)

**Merging Data:**
- To merge data from another device:
  1. Export from one device
  2. Import on another device
  3. Choose "Replace" if same dates, "Keep" if different
  4. Both apps now have all entries

### Backup Strategy

**Recommended Backup Schedule:**
- Export weekly to external storage
- Export before major life changes
- Export before clearing browser data
- Keep 3-6 month-old backups

**Storage Options for Backups:**
- Computer hard drive or SSD
- Cloud storage (Google Drive, OneDrive, Dropbox)
- USB drive or external drive
- Email to yourself
- Private storage service

## Managing Your Data

### Data Storage

**Where Is My Data?**
- Stored in your browser's Local Storage
- Specific to this browser and device
- Does NOT sync to cloud
- Does NOT sync across browsers or devices

**Clearing Your Data:**
⚠️ **Warning**: This cannot be undone without a backup

1. Open browser Developer Tools (F12 or right-click → Inspect)
2. Go to "Application" or "Storage" tab
3. Select "Local Storage"
4. Find the site entry
5. Look for key: `dailyJournalEntries`
6. Right-click and delete

Or clear all site data:
- Browser settings → Clear browsing data
- Select "Cookies and Site Data"
- Clear for Daylight's website

### Storage Limits

- Most browsers allow 5-10MB per website
- Typical journal entry is ~1KB
- 5MB = roughly 5,000 entries
- At 1 entry per day, that's ~13 years of journaling

### Browser & Device Specificity

- **Different Browsers**: Safari, Chrome, Firefox have separate storage
- **Different Devices**: Desktop and phone have separate storage
- **Private/Incognito**: Data doesn't persist (separate storage)
- **Shared Computers**: Each user account has separate storage

### Privacy & Security

**What Is Private:**
- All data stays on your device
- No servers collect your data
- No accounts or login required
- No tracking or analytics
- No sharing without your action

**What To Know:**
- Local Storage is unencrypted plaintext
- Someone with device access can see data
- Browser extensions could theoretically access it
- Clear data if sharing computer

**Recommendations:**
- Use full-disk encryption on device
- Don't leave devices unattended
- Use strong password on device login
- Export and store backups securely
- Review browser extensions for trustworthiness

## Tips & Best Practices

### Daily Journaling

**Build a Habit:**
- Journal at the same time each day (morning or evening)
- Track your writing streak on the Dashboard
- Set a reminder on your phone or calendar
- Start with just 5-10 minutes per day

**Writing Tips:**
- Write freely — no need to be perfect
- Include details about your day and feelings
- Use reflections to practice gratitude
- Be honest — it's for your eyes only

### Effective Mood Tracking

**Use Moods Meaningfully:**
- Choose the mood that best captures your day
- Mood can change, but represents the average for the day
- Look at patterns over weeks and months
- Notice what moods correlate with specific events

### Using Reflections

**Maximize Growth:**
- Answer reflections thoughtfully
- Use "went well" to celebrate successes
- Use "could be better" to learn from challenges
- Use "grateful for" to build gratitude practice

**Sample Reflections:**
```
What went well?
- Completed important project
- Had great conversation with mentor
- Took a good workout class

What could be better?
- Spent too much time on social media
- Didn't drink enough water
- Procrastinated on one task

What am I grateful for?
- My health and energy
- My supportive friends
- The opportunity to grow
```

### Using Search to Discover Patterns

**Monthly Reviews:**
- Search for month: "October 2026"
- Note which moods were most common
- Look for external causes (weather, stress, events)

**Mood Patterns:**
- Filter by mood: "Anxious 😰"
- See what situations trigger anxiety
- Identify coping strategies from past entries

**Theme Exploration:**
- Search "work" to see work-related entries
- Search "family" to see relationship reflections
- Identify recurring themes in your life

### Backup Reminders

**Don't Lose Your Journal:**
- Export every month
- Keep backups in multiple locations
- Test imports occasionally
- Never rely on browser data alone

### Long-Term Journaling

**After 1 Year:**
- Export yearly review with all entries
- Use Calendar to see 12 months of moods
- Reflect on personal growth and changes
- Create a summary of important entries

**For Years:**
- Organize backups by year
- Journal becomes a personal archive
- Review past entries for inspiration
- See how you've changed and grown

---

For technical details, see [Architecture](./ARCHITECTURE.md) and [Data Model](./DATA_MODEL.md).

Happy journaling! 🌙
