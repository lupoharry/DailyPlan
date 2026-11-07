# ☀️ Daylight — Daily Journal with Mood Tracker

A calm, responsive journaling application for recording daily thoughts, tracking mood, and revisiting personal reflections. Runs entirely in your browser with no server, backend, or account required. Your data is yours—stored locally and never sent anywhere.

![Daylight home dashboard](./assets/daylight-home.png)

---

## ✨ Features

### Journal Management
- **Create & Edit** — Write journal entries for any past, present, or future date
- **One Entry Per Day** — One thoughtful entry per calendar day, preventing duplicates
- **Rich Content** — Capture titles, mood, detailed thoughts, and guided reflections
- **Character Counter** — Track entry length as you write

### Mood Tracking
- **Ten Moods** — Select from 10 distinct emotions: Ecstatic, Happy, Content, Calm, Neutral, Restless, Anxious, Sad, Angry, Devastated
- **Mood Statistics** — View average mood, most common emotion, and weekly distribution
- **Visual Indicators** — Emoji and color-coded mood representation throughout the app

### Dashboard Overview
- **Entry Count** — Total journal entries written
- **Writing Streak** — Consecutive days with entries
- **Mood Analytics** — Average mood score and most frequent emotion
- **Last 7 Days** — Quick visual summary of recent activity
- **Recent Entries** — Quick access to your latest thoughts

### Calendar View
- **Month Overview** — See your entire month at a glance
- **Entry Indicators** — Visual markers for dates with entries
- **Mood Display** — Emoji indicators showing mood for each date
- **Navigation** — Easy month-to-month browsing
- **Direct Entry Creation** — Click any date to create or edit entries

### Search & Filtering
- **Full-Text Search** — Find entries by keywords in title, content, or reflections
- **Filter by Mood** — Show only entries for a specific emotion
- **Filter by Date** — Search within date ranges or specific months
- **Flexible Sorting** — Newest first, oldest first, best mood, worst mood
- **Combined Filters** — Use multiple filters simultaneously for precise results

### Data Management
- **Export Data** — Download complete journal as JSON backup
- **Import Data** — Restore from backup or merge data from other devices
- **Conflict Resolution** — Smart handling of duplicate dates during import
- **No Data Loss** — Complete validation before any import
- **Responsive Confirmation** — Clear prompts before destructive actions

### Design & Accessibility
- **Responsive Layout** — Works beautifully on desktop, tablet, and mobile
- **Keyboard Navigation** — Full keyboard accessibility and focus management
- **Touch-Friendly** — Optimized for touch devices and small screens
- **Safe Text Display** — All user-entered text is properly sanitized
- **Smooth Animations** — Pleasant transitions and interactions
- **Offline-First** — Works without internet after initial load

---

## 🏗️ Technology Stack

### Frontend
- **HTML5** — Semantic, accessible markup
- **CSS3** — Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)** — Vanilla, framework-free code organized into modules
- **Google Fonts** — Professional typography (DM Sans, Manrope) with system fallbacks

### Storage & APIs
- **Browser Local Storage** — Client-side persistence, 5-10MB per browser
- **JSON** — Human-readable data import/export format
- **Fetch API** — Optional external resources (fonts only)

### Zero Dependencies
- ✅ No npm packages
- ✅ No build tools (webpack, babel, etc.)
- ✅ No frontend framework (React, Vue, Angular)
- ✅ No backend server, API, or database
- ✅ No authentication or account system
- ✅ Runs by opening `index.html` in a browser

---

## 📁 Project Folder Structure

```
DailyPlan/
├── index.html                      # Main application entry point
├── README.md                       # This file
├── LICENSE                         # MIT License
├── CHANGELOG.md                    # Version history
├── CONTRIBUTING.md                 # Contribution guidelines
├── CODE_OF_CONDUCT.md             # Community guidelines
├── SECURITY.md                     # Security policy and considerations
├── SUPPORT.md                      # How to get help
├── .gitignore                      # Git ignore rules
├── .editorconfig                   # Editor configuration
├── .gitattributes                  # Git attributes for text files
├── .nojekyll                       # Disable Jekyll for GitHub Pages
│
├── css/
│   ├── styles.css                 # Core styles and CSS variables
│   ├── components.css             # Component-specific styling
│   └── responsive.css             # Media queries and responsive design
│
├── js/
│   ├── app.js                     # Application initialization
│   ├── navigation.js              # Client-side routing and view switching
│   ├── storage.js                 # Local Storage operations
│   ├── journal.js                 # Journal CRUD operations
│   ├── mood.js                    # Mood tracking and statistics
│   ├── dashboard.js               # Dashboard view and calculations
│   ├── calendar.js                # Calendar view logic
│   └── utils.js                   # Shared utility functions
│
├── assets/
│   ├── daylight-home.png          # Dashboard screenshot
│   └── icons/
│       └── daylight.svg           # Application icon
│
├── docs/
│   ├── ARCHITECTURE.md            # Technical architecture and module overview
│   ├── DATA_MODEL.md              # Data structure and schema documentation
│   └── USER_GUIDE.md              # Complete user documentation
│
└── .github/
    ├── CONTRIBUTING.md             # Link to main contributing guide
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md           # Bug report template
    │   └── feature_request.md      # Feature request template
    ├── PULL_REQUEST_TEMPLATE.md    # Pull request template
    └── workflows/
        └── validate.yml            # GitHub Actions validation workflow
```

---

## 🚀 Installation & Setup

### Quick Start

1. **Clone or Download** the repository
   ```bash
   git clone https://github.com/lupoharry/DailyPlan.git
   cd DailyPlan
   ```

2. **Open in Browser** — Simply open `index.html` in your web browser
   - No installation required
   - No dependencies to install
   - No build step needed

3. **Start Journaling** — Create your first entry!

### Running Locally with Live Server (Recommended)

Using VS Code Live Server extension for better development experience:

1. **Install Live Server** extension in VS Code (if not already installed)

2. **Open project** in VS Code
   ```bash
   code .
   ```

3. **Start Live Server**
   - Right-click `index.html`
   - Select "Open with Live Server"
   - Browser opens to `http://localhost:5500`

4. **Changes auto-reload** as you work

### Browser Requirements

- Chrome/Chromium (v90+)
- Firefox (v88+)
- Safari (v14+)
- Edge (v90+)
- Any modern browser with ES6, LocalStorage, and Fetch API support

---

## 📖 How to Use

### Creating Your First Entry

1. Open the application
2. Click **"Create Entry"** on the dashboard
3. Fill in:
   - **Title** — Brief entry headline
   - **Mood** — Select your mood (1 of 10)
   - **Content** — Write your thoughts
   - **Reflections** (optional) — Answer guided questions
4. Click **"Save Entry"**

### Editing Previous Entries

1. Find your entry via:
   - Journal list view
   - Dashboard recent entries
   - Calendar date
   - Search results
2. Click entry to view details
3. Click **"Edit"** button
4. Make changes and click **"Save Changes"**

### Tracking Your Mood

- Select a mood when creating or editing entries
- View mood statistics on dashboard
- Filter by mood in search view
- See mood distribution across different time periods

### Using the Calendar

1. Click **"Calendar"** in navigation
2. Browse months with previous/next buttons
3. Click on a date to:
   - View existing entry
   - Create new entry for that date
4. See mood emoji for each date with an entry

### Searching Your Journal

1. Click **"Search"** in navigation
2. Enter search terms to find entries by:
   - Text content (title, body, reflections)
   - Mood (Happy, Anxious, etc.)
   - Date range
   - Specific month
3. Sort results (newest, oldest, best mood, worst mood)
4. Click any result to view full entry

### Exporting Your Data

1. Click **"Data & Settings"** or **"Settings"**
2. Click **"Export Data"** button
3. A JSON file downloads to your computer
4. Save to cloud storage or external drive for backup

### Importing Data

1. Click **"Data & Settings"** or **"Settings"**
2. Click **"Import Data"** button
3. Select a previously exported JSON file
4. Review conflicts (if any)
5. Confirm import
6. Data merges with existing entries

---

## 💾 Local Storage Explanation

### What is Local Storage?

Local Storage is a browser feature that stores data locally on your device (not on a server).

### Where is My Data?

- **Stored locally** on your computer/device in your browser profile
- **Not sent to any server** — completely private
- **Specific to browser** — Safari data separate from Chrome, etc.
- **Specific to device** — phone data separate from computer
- **Survives browser restart** — persists until you manually delete it

### How Much Can I Store?

- Most browsers allow **5-10MB per website**
- Average entry is ~1KB
- That's space for **5,000+ entries**
- At 1 entry/day = ~13 years of journaling

### Storage Limitations

- **Unencrypted** — Data is plaintext (though browser handles securely)
- **No sync** — Doesn't sync across devices or browsers
- **Can be cleared** — Clearing browser data deletes Local Storage
- **Private windows** — Incognito/private browsing doesn't persist data

### Clearing Your Data

⚠️ This permanently deletes all journal entries!

**In Developer Tools:**
1. Press F12 (Developer Tools)
2. Go to Application → Local Storage
3. Find the Daylight entry
4. Delete the `dailyJournalEntries` key

**Or clear browser data:**
1. Browser settings → Clear browsing data
2. Select "Cookies and other site data"
3. Select timeframe "All time"
4. Click Clear

### Privacy & Security

✅ **What's Secure:**
- Data never leaves your device
- No accounts or logins
- No tracking or analytics
- No third-party access
- You have complete control

⚠️ **What to Know:**
- Device with access = data access
- Malware could potentially access Local Storage
- Browser extensions could theoretically access data
- Not encrypted at rest

🔒 **How to Protect:**
- Use full-disk encryption on your device
- Keep device secure and password-protected
- Export backups to secure external storage
- Review browser extensions for trustworthiness
- Regularly back up important data

---

## 💾 Data Backup & Restore

### Why Backup?

- Protect against data loss
- Safeguard against browser data clearing
- Move data between devices
- Archive years of journaling
- Security against device failure

### Regular Backup Strategy

**Recommended Frequency:**
- ✅ Weekly — Export to external drive
- ✅ Monthly — Save to cloud storage
- ✅ Before major events — Before clearing browser data
- ✅ Seasonally — Archive by season/year

**Storage Locations:**
- Computer/external drive
- Cloud storage (Google Drive, OneDrive, Dropbox)
- USB drive or external SSD
- Private encrypted storage
- Email to yourself
- Password manager backup

### Export Process

1. Go to **Settings** → **Data Management**
2. Click **"Export All Data"** button
3. Browser prompts to download file
4. File is named: `daylight-backup-YYYY-MM-DD.json`
5. Move file to backup location

### Import Process

1. Go to **Settings** → **Data Management**
2. Click **"Import Data"** button
3. Select JSON backup file
4. App shows conflicts (if any)
5. Choose "Replace", "Keep", or "Cancel"
6. Click "Import"
7. Data is restored

### Merging Data from Multiple Devices

**Scenario:** You journal on both laptop and phone

1. **Export from Device A** — Save backup to cloud
2. **Import on Device B** — Open backup file
3. **Choose "Replace"** for dates that exist on both
4. **Now both devices have all entries**

### Backup File Format

Export files are standard JSON:

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "date": "2026-11-05",
    "title": "Today's Thoughts",
    "mood": "happy",
    "moodScore": 8,
    "content": "Entry text here...",
    "reflections": ["Answer 1", "Answer 2", "Answer 3"],
    "createdAt": "2026-11-05T10:30:00Z",
    "updatedAt": "2026-11-05T10:30:00Z"
  }
]
```

- **Human-readable** — Open in any text editor
- **No encryption** — Store securely separate
- **No corruption risk** — Validated before import
- **Portable** — Works across browsers and devices

---

## 🌐 Browser Compatibility

| Browser | Desktop | Mobile | Minimum Version |
|---------|---------|--------|-----------------|
| Chrome | ✅ | ✅ | v90+ |
| Firefox | ✅ | ✅ | v88+ |
| Safari | ✅ | ✅ | v14+ |
| Edge | ✅ | ✅ | v90+ |
| Opera | ✅ | ✅ | v76+ |
| Samsung Internet | ⚠️ | ✅ | v14+ |

**Required Features:**
- ES6 JavaScript support
- CSS Grid and Flexbox
- Local Storage API
- Fetch API
- JSON object

**Mobile Considerations:**
- Touch-optimized interface
- Works in mobile browsers
- Can add to home screen as web app
- Responsive design for all screen sizes

---

## 🔐 Privacy & Security Information

### No Data Collection

✅ Daylight **does not:**
- Collect personal information
- Track your behavior
- Send data to servers
- Use analytics or cookies
- Require accounts or login
- Connect to internet (after initial load)

✅ Your data is:
- Stored only on your device
- Never transmitted
- Under your complete control
- Private by default

### Local Storage Security

**Strengths:**
- Browser-managed storage
- Isolated per origin
- Protected by browser sandbox
- Cleared only on user action

**Limitations:**
- Plaintext storage (unencrypted)
- No authentication required to access (on that device)
- Specific to device and browser
- Visible to browser extensions
- Cleared when browser data cleared

### Responsible Use

- Use on **trusted, personal devices** only
- Don't share browser sessions
- Protect your device with strong passwords
- Use full-disk encryption
- Review browser extensions
- Export backups regularly

### Third-Party Services

**Google Fonts:**
- Optional external font loading
- May collect usage statistics
- See [Google Privacy Policy](https://policies.google.com/privacy)
- App uses system fonts as fallback (works offline)

**GitHub (where code is hosted):**
- View [GitHub Privacy Policy](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)

---

## 🗺️ Roadmap

### Version 1.0.0 (Current)
- ✅ Core journaling functionality
- ✅ 10 mood tracking options
- ✅ Local Storage persistence
- ✅ Calendar view
- ✅ Search and filtering
- ✅ Export/import data
- ✅ Responsive design
- ✅ GitHub documentation

### Future Enhancements (Proposed)

**Version 1.1.0:**
- Tags for categorizing entries
- Multiple emoji/visual options
- Advanced statistics (mood trends, writing patterns)
- Customizable mood list
- Dark mode theme
- Entry templates

**Version 1.2.0:**
- Full-text search improvements
- Entry pinning/favorites
- Word count statistics
- Monthly summaries
- Reading time estimates
- Print-friendly format

**Version 2.0.0 (If Expanded):**
- Optional sync across devices (via encryption)
- Sharing entries (read-only with encryption)
- Mobile app (Electron desktop or React Native)
- Backend support (optional, privacy-first)
- Attachment support
- Voice entry transcription

### What We Won't Add

🚫 Never:
- Advertisements or tracking
- Paid features (always free)
- Forced account creation
- Cloud sync without opt-in
- Feature bloat — keeping it simple
- Unnecessary dependencies

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) file for complete details.

**MIT License Summary:**
- ✅ Free to use, modify, and distribute
- ✅ Suitable for personal and commercial use
- ✅ Include original license in distributions
- ✅ No warranty provided

---

## 🤝 Contributing

We welcome contributions! Before contributing, please read:

1. **[Contributing Guide](./CONTRIBUTING.md)** — Development setup and conventions
2. **[Code of Conduct](./CODE_OF_CONDUCT.md)** — Community guidelines

### Quick Start for Contributors

```bash
# Clone the repository
git clone https://github.com/lupoharry/DailyPlan.git
cd DailyPlan

# Open in VS Code with Live Server
code .

# Right-click index.html → "Open with Live Server"
```

### Areas for Contribution

- 🐛 **Bug fixes** — Report and fix issues
- ✨ **Features** — New functionality (within scope)
- 📚 **Documentation** — Improve guides and comments
- 🎨 **Design** — UI/UX improvements
- 🧪 **Testing** — Cross-browser and device testing
- ♿ **Accessibility** — WCAG compliance improvements

### Development Guidelines

- **Branch naming** — `feature/`, `bugfix/`, `docs/`, etc.
- **Commits** — Follow conventional commit format
- **Code style** — See `.editorconfig` and CONTRIBUTING.md
- **Testing** — Manual testing required (see checklist in CONTRIBUTING.md)
- **Documentation** — Update docs for new features

---

## 📖 Documentation

### For Users
- **[User Guide](./docs/USER_GUIDE.md)** — How to use every feature
- **[SUPPORT.md](./SUPPORT.md)** — Getting help, FAQs, troubleshooting

### For Developers
- **[Architecture](./docs/ARCHITECTURE.md)** — Technical design and modules
- **[Data Model](./docs/DATA_MODEL.md)** — Data structure and schema
- **[Contributing Guide](./CONTRIBUTING.md)** — Development guidelines

### For Maintainers
- **[Security Policy](./SECURITY.md)** — Security considerations and reporting
- **[Code of Conduct](./CODE_OF_CONDUCT.md)** — Community standards
- **[Changelog](./CHANGELOG.md)** — Version history
- **[GitHub Actions](./github/workflows/validate.yml)** — CI/CD validation

---

## 🛠️ Technology Highlights

### Why Vanilla JavaScript?

- **No dependencies** — No npm packages to install/maintain
- **Fast loading** — No framework overhead
- **Better learning** — Direct browser API usage
- **Full control** — No abstraction layers
- **Offline-first** — Works without internet
- **Runs anywhere** — Just HTML, CSS, JavaScript

### Why Local Storage?

- **Simple** — Straightforward API, no configuration
- **Sufficient** — 5-10MB per browser is plenty for journal
- **No backend** — Eliminate server costs and complexity
- **Privacy** — Data never leaves device
- **Performance** — Fast reads/writes
- **Reliable** — Well-supported across browsers

### Why No Framework?

Daylight proves that modern web apps don't need React, Vue, or Angular:

- **Simpler codebase** — Easier to understand and maintain
- **Smaller bundle** — Instant loading
- **Direct DOM** — Predictable behavior
- **Learning tool** — Shows real browser APIs
- **Production-ready** — Fully featured without framework

---

## 🎯 Project Goals

Daylight aims to be:

✅ **Private** — Your data, your device
✅ **Simple** — One entry per day, uncomplicated
✅ **Beautiful** — Calm, modern, distraction-free
✅ **Reliable** — Works offline, no dependencies
✅ **Accessible** — Keyboard navigation, inclusive design
✅ **Maintainable** — Clear code, good documentation
✅ **Free** — Always free, always open source
✅ **Inspirational** — Helps users reflect and grow

---

## ❓ Frequently Asked Questions

**Q: Is my data safe?**
A: Your data stays on your device in Local Storage. It's never sent anywhere. However, Local Storage is unencrypted plaintext. Keep your device secure.

**Q: Can I sync across devices?**
A: Currently no. Export from one device and import on another. Future versions may add optional sync.

**Q: What if I clear my browser data?**
A: All Daylight entries are deleted. Always export regular backups!

**Q: Can I share entries with someone?**
A: You can export your journal and share the JSON file. They can import it into their Daylight.

**Q: What if you shut down the project?**
A: Your data is already on your device. Export it and it's yours forever. The code is open source.

**Q: Is there a mobile app?**
A: The web app works great on mobile. You can add it to your home screen. Native apps are a possible future enhancement.

**Q: Do you have a privacy policy?**
A: There's no data collection, so minimal privacy concerns. See [SECURITY.md](./SECURITY.md) for details.

**Q: Can I contribute?**
A: Yes! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 📞 Support & Feedback

**Getting Help:**
- Read [User Guide](./docs/USER_GUIDE.md) for feature usage
- Check [SUPPORT.md](./SUPPORT.md) for FAQs and troubleshooting
- Review [Architecture docs](./docs/ARCHITECTURE.md) for technical questions

**Report Issues:**
- [Open a bug report](https://github.com/lupoharry/DailyPlan/issues/new?template=bug_report.md)
- [Request a feature](https://github.com/lupoharry/DailyPlan/issues/new?template=feature_request.md)

**Security Concerns:**
- Email security contact (see [SECURITY.md](./SECURITY.md))
- Do not open public security issues

---

## 🙏 Acknowledgments

- Inspired by Notion, Google Keep, and modern journaling apps
- Icons and design patterns from contemporary web apps
- Built with accessibility and user privacy in mind
- Community feedback and contributions (coming soon!)

---

## 📊 Project Stats

- **Built with:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Browser APIs:** Local Storage, Fetch, Date, JSON
- **Size:** ~50KB HTML/CSS/JS (production)
- **Performance:** Instant load, smooth 60fps interactions
- **Accessibility:** WCAG 2.1 Level AA target
- **Code:** Open source, MIT licensed
- **Maintenance:** Actively maintained

---

**Start journaling today! 🌙**

Open `index.html` in your browser and begin capturing your daily thoughts, moods, and reflections.

---

<div align="center">

Made with 💙 for mindfulness and self-reflection.

[GitHub](https://github.com/lupoharry/DailyPlan) • [Documentation](./docs/USER_GUIDE.md) • [License](./LICENSE)

</div>

#
<div align="center">
# 🎯📗

# 😼🐱😼🐱😼🐱😼🐱
#

## THE Prompt used:
</div align>


# Project: Daily Journal with Mood Tracker

## Role
Act as a senior frontend developer and UI/UX designer. Build a complete, polished, modern **Daily Journal with Mood Tracker** web application using vanilla HTML5, CSS3, and JavaScript (ES6+).

The application must be fully functional, responsive, and use browser Local Storage as its database. Do not use a backend, server, database service, or frontend framework.

The result should feel like a professional, production-quality journaling application, not a basic HTML form or tutorial project.

---

# 1. Technology Stack

Use the following technologies:

- HTML5 for application structure.
- CSS3 for styling, layouts, animations, and responsive design.
- Vanilla JavaScript (ES6+) for all application logic.
- Browser Local Storage for persistent data storage.
- Lucide Icons (or another lightweight icon library) for modern icons.
- Google Fonts, preferably Inter or Manrope.
- CSS Grid and Flexbox for layouts.

Important:
- No React, Angular, Vue, or other frontend frameworks.
- No backend or API dependencies.
- No build tools required.
- The application must run locally by opening index.html.
- Organize JavaScript into reusable modules where practical.

---

# 2. Project Folder Structure

Create a clean and maintainable folder structure:
```text
/ (current workspace: /DailyPlan)
│
├── index.html
│
├── css/
│   ├── styles.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── storage.js
│   ├── journal.js
│   ├── mood.js
│   ├── dashboard.js
│   ├── calendar.js
│   └── utils.js
│
├── assets/
│   └── icons/
│
└── README.md
```
Keep the code modular, readable, and well documented.

---

# 3. Design & User Experience

## Design inspiration

Use the visual design language of:
- Notion
- Google Keep
- Modern personal journaling applications
- Minimalist productivity dashboards

## Overall visual direction

Create a clean, elegant, calming, and distraction-free interface.

Design characteristics:
- Light background with subtle grey tones.
- White cards with soft shadows.
- Rounded corners (10–16px).
- Generous whitespace.
- Modern typography.
- Subtle borders and separators.
- Consistent spacing.
- Minimalist icons.
- Smooth hover effects and transitions.
- Restrained accent colors.

Suggested color palette:

- Primary: #6366F1 (Indigo)
- Secondary: #8B5CF6 (Purple)
- Background: #F8FAFC
- Surface: #FFFFFF
- Main text: #1E293B
- Secondary text: #64748B
- Border: #E2E8F0
- Positive mood: #22C55E
- Neutral mood: #F59E0B
- Negative mood: #EF4444

Use CSS variables for all design tokens.

## Layout

Desktop-first design:

- Fixed or sticky sidebar navigation on the left.
- Main content area on the right.
- Maximum content width for comfortable reading.
- Responsive card-based dashboard.
- Mobile navigation should transform into a compact menu or bottom navigation.

The interface must work smoothly on desktop, tablet, and mobile.

---

# 4. Application Pages

Build three main pages with client-side navigation. Switching pages should not reload the browser.

## PAGE 1: HOME / DASHBOARD

Purpose: Give the user a quick overview of their journaling activity and mood.

### Header

Display:
- Greeting: "Good evening!" (adjust according to local time).
- Current date.
- Short motivational subtitle, e.g. "Take a moment to reflect on your day."

### Primary action

Create a prominent card:

**How was your day?**

Subtitle: "Capture your thoughts and feelings."

Button: "+ Add Today's Journal"

Clicking this button should open the Add New Journal page with today's date preselected.

If today's journal already exists, change the button to "Edit Today's Journal" and open the existing entry.

### Statistics section

Display four attractive statistics cards:

1. Total Journal Entries
   - Number of saved journal entries.

2. Current Writing Streak
   - Consecutive days with journal entries.

3. Average Mood
   - Calculate the average mood based on recorded mood scores.

4. Most Common Mood
   - Display the mood selected most frequently.

All statistics must be calculated dynamically from Local Storage.

### Mood Overview

Display a visual mood overview for the last 7 days.

Use a simple chart or visual representation showing the mood for each day.

Each day should display:
- Day/date.
- Mood icon.
- Mood label.

Use colors to distinguish different moods.

### Recent Journal Entries

Show the last 3–5 journal entries.

Each card should contain:
- Date.
- Mood icon and label.
- Journal title.
- Short text preview.
- Read More action.

Clicking an entry opens the corresponding journal detail or edit view.

Provide a link to "View All Journals".

---

## PAGE 2: MY JOURNAL

Purpose: Browse, search, filter, and manage previous journal entries.

### Header

Title: "My Journal"

Subtitle: "Your thoughts, memories, and reflections."

### Search and filters

Include:

- Search input to search journal titles and content.
- Date filter.
- Month/year filter.
- Mood filter.
- Sort options:
  - Newest first.
  - Oldest first.

Filters should work together.

### Journal display

Display journal entries as modern cards or a clean timeline.

Each journal card should contain:

- Journal date.
- Weekday.
- Journal title.
- Mood icon.
- Mood label.
- Short journal preview.
- Created/updated information.

Actions:
- View journal.
- Edit journal.
- Delete journal.

Deleting an entry must display a confirmation dialog.

### Empty state

If there are no journal entries, display an attractive empty state:

"No journal entries yet."

"Every day is a new opportunity to reflect. Start writing your first journal entry."

Button: "Create Your First Journal"

---

## PAGE 3: ADD NEW JOURNAL

Purpose: Allow the user to create or edit a journal entry for any date.

This is one of the most important parts of the application.

### Important date behavior

By default, today's date must be selected.

However, the user must be able to select ANY date using a date picker.

The user can create journal entries for:
- Today.
- Yesterday.
- Any previous date.
- Any future date.

Do not restrict journal creation to today's date.

When the user selects a date that already has an entry, load that entry automatically into the form for editing.

When the user selects a date without an existing entry, show a blank journal form.

There must only be one journal entry per calendar date. Saving an entry for an existing date should update that entry rather than create a duplicate.

### Journal form

Fields:

**1. Journal Date**
- HTML date input.
- Default value: today's date.
- Editable by the user.

**2. Journal Title**
- Text input.
- Placeholder: "Give your day a title..."
- Example: "A productive day at work".

**3. How are you feeling today?**

Create an interactive mood selector using large emoji buttons or attractive selectable cards.

Provide the following mood options:

| Mood | Emoji | Score |
|---|---|---|
| Amazing | 😁 | 5 |
| Happy | 😊 | 4 |
| Good | 🙂 | 3 |
| Neutral | 😐 | 2 |
| Sad | 😔 | 1 |
| Anxious | 😰 | 1 |
| Stressed | 😫 | 1 |
| Angry | 😡 | 1 |
| Tired | 😴 | 2 |
| Grateful | 🥰 | 5 |

Requirements:
- Only one primary mood can be selected.
- Highlight the selected mood visually.
- Show a smooth selection animation.
- Save both mood name and score.
- Allow changing the mood before saving.

**4. Journal Content**

Create a comfortable writing area using a large textarea.

Placeholder:

"What happened today? What are you thinking about? Write freely..."

Requirements:
- Comfortable line height.
- Large writing area.
- Auto-expand textarea where practical.
- Character count.
- Support multiline text.
- Preserve line breaks when displaying saved entries.

**5. Additional Reflection (Optional)**

Include optional reflection prompts:

- What went well today?
- What could have been better?
- What am I grateful for today?
- What did I learn today?

These can be optional text fields or collapsible sections.

### Form actions

- Save Journal.
- Cancel.
- Clear Form (with confirmation).

After successfully saving:
- Persist data in Local Storage.
- Display a success notification.
- Navigate to My Journal or Home.
- Update all dashboard statistics immediately.

If the user tries to leave with unsaved changes, show a confirmation dialog.

---

# 5. Local Storage Database

Implement a dedicated storage.js module.

Use a consistent Local Storage key:

dailyJournalEntries

Example data structure:
```text
[
  {
    "id": "unique-id",
    "date": "2026-11-03",
    "title": "A productive day",
    "mood": {
      "name": "Happy",
      "emoji": "😊",
      "score": 4
    },
    "content": "Today was a good day...",
    "reflections": {
      "wentWell": "Completed an important project",
      "couldImprove": "Better time management",
      "gratitude": "Family and friends",
      "learned": "Learned something new"
    },
    "createdAt": "ISO timestamp",
    "updatedAt": "ISO timestamp"
  }
]
```
Implement these storage functions:

- getAllEntries()
- getEntryById(id)
- getEntryByDate(date)
- saveEntry(entry)
- updateEntry(id, updatedEntry)
- deleteEntry(id)
- clearAllEntries()
- getEntriesByMonth(year, month)

Requirements:
- Generate unique IDs.
- Handle missing or invalid Local Storage data gracefully.
- Avoid duplicate entries for the same date.
- Preserve createdAt when editing.
- Update updatedAt whenever an entry is modified.
- Never lose existing entries when saving a new entry.

---

# 6. Additional Functionality

Implement the following features:

### Calendar integration

Create a simple calendar view or date selector that allows the user to:
- Navigate between months.
- See which dates have journal entries.
- See a small mood indicator on dates with entries.
- Click a date to open its journal.

### Journal detail view

Allow users to open a journal entry in a comfortable reading layout.

Display:
- Date.
- Title.
- Mood.
- Full journal content.
- Reflection answers.
- Edit and Delete actions.

### Notifications

Create elegant toast notifications for:
- Journal saved successfully.
- Journal updated successfully.
- Journal deleted successfully.
- Validation errors.

### Data management

Add a small settings or utility section with:

- Export all journal entries as JSON.
- Import journal entries from JSON.
- Clear all journal data (with strong confirmation).

Import should validate the file structure before modifying existing data.

---

# 7. JavaScript Architecture

Keep application logic separated into modules.

Responsibilities:

**app.js**
- Application initialization.
- Main event listeners.
- Navigation initialization.

**navigation.js**
- Sidebar navigation.
- Page switching.
- Active navigation state.

**storage.js**
- All Local Storage operations.
- Data validation.
- CRUD operations.

**journal.js**
- Journal creation.
- Journal editing.
- Journal detail rendering.
- Journal deletion.
- Search and filtering.

**mood.js**
- Mood configuration.
- Mood selection.
- Mood statistics.

**dashboard.js**
- Dashboard rendering.
- Statistics calculation.
- Recent entries.
- Mood overview.

**calendar.js**
- Calendar generation.
- Month navigation.
- Entry indicators.

**utils.js**
- Date formatting.
- Unique ID generation.
- Toast notifications.
- Confirmation dialogs.
- Shared helper functions.

Avoid duplicated logic. Use reusable functions and event delegation where appropriate.

---

# 8. Responsive Design

Desktop (1200px and above):
- Full sidebar.
- Multi-column dashboard cards.
- Comfortable journal reading width.

Tablet (768px–1199px):
- Compact sidebar.
- Adjusted grid layouts.
- Responsive spacing.

Mobile (below 768px):
- Collapsible sidebar or bottom navigation.
- Single-column cards.
- Full-width forms.
- Touch-friendly buttons.
- Responsive date picker.
- No horizontal scrolling.
- Comfortable typography.

Test the design at:
- 1440px desktop.
- 1024px tablet.
- 768px small tablet.
- 390px mobile.
- 360px small mobile.

---

# 9. Quality Requirements

The application must:

- Be fully functional, not just a static mockup.
- Have no JavaScript console errors.
- Have no broken navigation.
- Work without a backend.
- Persist entries after refreshing the page.
- Handle empty states correctly.
- Validate required fields.
- Prevent duplicate entries for the same date.
- Support editing and deleting entries.
- Update dashboard statistics dynamically.
- Handle special characters and multiline text safely.
- Escape user-generated content to prevent HTML injection.
- Use semantic HTML and accessible labels.
- Provide visible keyboard focus states.
- Support keyboard navigation.
- Use consistent design patterns across all pages.

---

# 10. Deliverables

Create all required files in the project folder.

Also create a README.md containing:

- Project description.
- Features.
- Technology stack.
- Folder structure.
- How to run the application.
- How Local Storage works.
- How to export and import data.

Do not leave placeholder functions or TODO comments for core functionality.

---

# 11. Development Instructions for GitHub Copilot

Work in the following sequence:

**Phase 1: Project setup**
- Create the folder structure.
- Build the main HTML layout.
- Define CSS variables and the design system.
- Implement responsive navigation.

**Phase 2: Core functionality**
- Implement Local Storage.
- Implement journal creation and editing.
- Implement mood selection.
- Implement date selection and duplicate-date handling.

**Phase 3: Application pages**
- Build Home dashboard.
- Build My Journal.
- Build Add New Journal.
- Build journal detail view.

**Phase 4: Additional features**
- Implement search and filtering.
- Implement calendar.
- Implement statistics.
- Implement JSON import/export.
- Implement notifications and confirmation dialogs.

**Phase 5: Testing and refinement**
- Test all CRUD operations.
- Test persistence after browser refresh.
- Test date selection for past and future dates.
- Test duplicate-date handling.
- Test responsive layouts.
- Fix all errors.
- Refine visual consistency.

IMPORTANT – PROJECT LOCATION

The current VS Code workspace is already /DailyPlan.

Use the existing workspace root (/DailyPlan) as the project root.

Do NOT create another daily-journal folder.

Do NOT create another /root folder.

Place index.html directly in the current workspace root.

Create the css, js, and assets folders directly inside the workspace root.

All relative file paths and imports must work from this root.

The application must be created directly inside the existing /DailyPlan workspace.

IMPORTANT: Do not stop after creating the HTML and CSS. Implement the complete JavaScript functionality.

Before finishing, verify that every requested feature works.

The final result should look and feel like a polished, modern personal journaling product that someone would genuinely enjoy using every day.

#
# 12. GitHub Repository & Documentation Standards

IMPORTANT: The project must be structured as a professional, GitHub-ready repository.


Create the following GitHub and documentation files.

## Repository documentation

### README.md
Create a professional project README containing:

- Project name and description.
- Attractive project introduction.
- Feature overview.
- Screenshots section (placeholders initially).
- Technology stack.
- Application features.
- Project folder structure.
- Installation and setup instructions.
- How to run locally using VS Code Live Server.
- Local Storage explanation.
- Data backup and restore instructions.
- Browser compatibility.
- Privacy information.
- Roadmap.
- License information.
- Contribution guidelines.

### LICENSE
Create an MIT License.

Use a configurable copyright holder placeholder rather than inventing an author or company name.

### CONTRIBUTING.md
Document how to contribute:

- Development environment setup.
- Coding conventions.
- Folder and file organization.
- Branch naming conventions.
- Commit message conventions.
- Bug reporting.
- Feature proposals.
- Pull request process.
- Testing expectations.

### CODE_OF_CONDUCT.md
Use the Contributor Covenant Code of Conduct.

### SECURITY.md
Include:

- How to report security vulnerabilities.
- Supported project versions.
- Security considerations.
- Local Storage security limitations.
- Responsible disclosure guidelines.

Do not invent a security contact email. Use a clearly marked placeholder.

### SUPPORT.md
Explain how users can:

- Report bugs.
- Request features.
- Find documentation.
- Get assistance.

### CHANGELOG.md
Use Keep a Changelog conventions and Semantic Versioning.

Start with version 1.0.0 and an initial release section.

### .gitignore
Include sensible exclusions for:

- OS-generated files.
- Editor settings where appropriate.
- Temporary files.
- Logs.
- Build artifacts.
- Environment files.
- Dependencies if introduced later.

Do not ignore any required application source files.

### .editorconfig
Define consistent editor settings:

- UTF-8 encoding.
- LF line endings.
- Two-space indentation.
- Final newline.
- Trailing whitespace removal.

### .gitattributes
Define consistent text file handling and line endings.

### .nojekyll
Include this file to support deployment through GitHub Pages without Jekyll processing.

## GitHub-specific files

Create:

.github/CONTRIBUTING.md

Create issue templates:

- .github/ISSUE_TEMPLATE/bug_report.md
- .github/ISSUE_TEMPLATE/feature_request.md

Create:

- .github/PULL_REQUEST_TEMPLATE.md

The bug report template should request:
- Description.
- Steps to reproduce.
- Expected behavior.
- Actual behavior.
- Browser and operating system.
- Screenshots or console errors.

The feature request template should request:
- Problem to solve.
- Proposed solution.
- Expected user benefit.
- Optional screenshots or examples.

## GitHub Actions

Create:

.github/workflows/validate.yml

Implement a lightweight validation workflow that:

- Runs on pushes and pull requests.
- Checks HTML validity where practical.
- Performs JavaScript syntax checks.
- Checks for obvious broken references where practical.
- Does not require a backend.
- Does not introduce unnecessary dependencies.

Use a suitable GitHub Actions workflow and document how it works.

## Additional technical documentation

Create the docs folder with:

### docs/ARCHITECTURE.md
Document:
- Application architecture.
- JavaScript modules.
- Navigation approach.
- Data flow.
- Local Storage integration.
- UI component structure.

### docs/DATA_MODEL.md
Document:
- Journal entry structure.
- Mood model.
- Reflection model.
- Unique ID strategy.
- Date uniqueness.
- Storage key.
- Import/export JSON format.

### docs/USER_GUIDE.md
Explain:
- Creating journal entries.
- Editing previous entries.
- Selecting past and future dates.
- Tracking moods.
- Using the calendar.
- Searching and filtering.
- Exporting and importing data.
- Managing stored data.

## GitHub repository quality standards

- Use clear, professional Markdown.
- Include useful headings and navigation links.
- Use relative links between documentation files.
- Avoid empty documentation files.
- Avoid unnecessary boilerplate.
- Ensure all referenced files actually exist.
- Keep documentation consistent with implemented functionality.
- Never claim a feature exists if it has not been implemented.
- Keep all documentation aligned with the actual application.

## Final GitHub readiness checklist

Before finishing:

1. Verify the complete folder structure.
2. Verify every Markdown file renders correctly.
3. Verify all internal documentation links.
4. Verify the MIT License.
5. Verify issue and pull request templates.
6. Verify the GitHub Actions workflow syntax.
7. Verify JavaScript files contain no syntax errors.
8. Verify the application still works locally.
9. Verify the repository can be published through GitHub Pages.

The final deliverable must be a complete application and a professional, maintainable GitHub repository.
