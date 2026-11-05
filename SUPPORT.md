# Support

Thank you for using Daylight! Here's how to get help, report issues, or request features.

## Table of Contents

- [Documentation](#documentation)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Getting Help](#getting-help)
- [Data & Privacy](#data--privacy)

## Documentation

Start with these resources:

- **[User Guide](./docs/USER_GUIDE.md)** — How to use Daylight features
- **[Architecture](./docs/ARCHITECTURE.md)** — Technical overview for developers
- **[Data Model](./docs/DATA_MODEL.md)** — How your data is structured
- **[README](./README.md)** — Project overview and quick start

## Frequently Asked Questions

### General

**Q: Does Daylight require an internet connection?**
A: No. Once loaded, the app works completely offline. Internet is only needed to load Google Fonts on first visit.

**Q: Can I use Daylight on multiple devices?**
A: Currently, data is stored locally in your browser and doesn't sync across devices. You can export data on one device and import on another.

**Q: Is my data secure?**
A: Your data stays on your device in Local Storage. See [SECURITY.md](./SECURITY.md) for details on Local Storage security considerations.

**Q: Can I share my Daylight data with someone else?**
A: You can export your journal as JSON and share the file. They can then import it into their Daylight instance.

### Usage

**Q: How do I edit an old journal entry?**
A: Go to the calendar or search, click on an entry, then click the edit button to modify it.

**Q: Can I change a past mood?**
A: Yes, editing an entry allows you to change the mood associated with that day.

**Q: What happens if I clear my browser cache?**
A: All Daylight data will be deleted. Always export a backup before clearing cache.

**Q: How much data can I store?**
A: Most browsers allow 5-10MB of Local Storage per website, which is typically 1000+ journal entries.

**Q: Can I import data from other journaling apps?**
A: Daylight can import JSON files. To import from another app, export to JSON and ensure it matches Daylight's JSON format (see [Data Model](./docs/DATA_MODEL.md)).

### Technical

**Q: What browsers are supported?**
A: Any modern browser (Chrome, Firefox, Safari, Edge from 2018+). See [README](./README.md#browser-compatibility).

**Q: Do I need to install anything?**
A: No. Just open `index.html` in your browser.

**Q: Can I host Daylight on my own server?**
A: Yes. Daylight is static HTML/CSS/JS with no server requirements. Copy the files and serve them.

**Q: Is there a mobile app?**
A: Daylight is a web app that works on mobile browsers. You can save it to your home screen for app-like access.

## Reporting Bugs

Found a problem? Please help us fix it!

### Use the Bug Report Template

[Open a bug report](https://github.com/lupoharry/DailyPlan/issues/new?template=bug_report.md)

### Before Reporting

1. Check if the issue already exists (search issues)
2. Try clearing browser cache and reloading
3. Test in another browser if possible
4. Check the [User Guide](./docs/USER_GUIDE.md) if uncertain about expected behavior

### What to Include

- **Title**: Clear, specific description (not "it's broken")
- **Description**: What you were doing when the issue occurred
- **Steps to Reproduce**: Exact steps to recreate the issue
- **Expected Behavior**: What should have happened
- **Actual Behavior**: What actually happened
- **Browser/OS**: Chrome on Windows, Safari on iOS, etc.
- **Screenshots**: Helpful if there are visual issues

### Example Bug Report

> **Title**: Mood filter shows wrong entries
>
> **Steps to Reproduce**:
> 1. Create 3 entries with mood "Happy"
> 2. Create 2 entries with mood "Sad"
> 3. Filter by "Sad" mood
> 4. See "Happy" entries still showing
>
> **Expected**: Only "Sad" entries should display
>
> **Actual**: All entries display regardless of filter
>
> **Environment**: Chrome 120 on Windows 11

## Requesting Features

Have an idea to improve Daylight? We'd love to hear it!

### Use the Feature Request Template

[Open a feature request](https://github.com/lupoharry/DailyPlan/issues/new?template=feature_request.md)

### Before Requesting

1. Check existing issues and [Roadmap](./README.md#roadmap) to avoid duplicates
2. Consider whether it aligns with Daylight's philosophy (simple, private, offline-first)

### What to Include

- **Title**: Clear summary of the feature
- **Problem**: What problem does this solve?
- **Solution**: How would you implement this?
- **Benefit**: How would users benefit?
- **Mockups**: Screenshots, sketches, or examples (optional)

### Example Feature Request

> **Title**: Export entries as PDF
>
> **Problem**: Some users want to print or archive their journal as PDF
>
> **Solution**: Add a "Export as PDF" button alongside current JSON export
>
> **Benefit**: Easier sharing, printing, and long-term archival without technical knowledge

## Getting Help

### Documentation

- **How to use the app?** → [User Guide](./docs/USER_GUIDE.md)
- **Technical details?** → [Architecture](./docs/ARCHITECTURE.md)
- **How is data structured?** → [Data Model](./docs/DATA_MODEL.md)
- **Contributing to code?** → [Contributing Guide](./CONTRIBUTING.md)
- **Security concerns?** → [Security Policy](./SECURITY.md)

### Community

- **GitHub Issues** — Ask questions in issues or discussions
- **Code of Conduct** — See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

### Troubleshooting

**App won't load**
- Clear browser cache and reload
- Try a different browser
- Check browser console for error messages

**Data disappeared**
- Check if you're using a private/incognito window (data doesn't persist)
- Try a different browser (each browser has separate Local Storage)
- Import from a backup JSON file if available

**Export/Import not working**
- Ensure JSON file format is valid
- Check console for error messages
- Try exporting a fresh backup from Daylight first

**Slow or laggy**
- Try closing other browser tabs
- Clear browser cache
- Try a different browser

## Data & Privacy

### Your Data is Your Own

- All data stays on your device
- No account or signup required
- No tracking or analytics
- No data sent to servers

### Backups

Regular backups protect your data:
- Export to JSON monthly
- Store backups in secure location
- Test imports occasionally to ensure backups work

### Clearing Data

To completely remove Daylight data:
1. Open browser Developer Tools (F12)
2. Go to Application → Local Storage
3. Find `dailyJournalEntries` key
4. Delete it or clear entire Local Storage for the site

---

Need more help? Open an issue on [GitHub](https://github.com/lupoharry/DailyPlan/issues) or check the [Code of Conduct](./CODE_OF_CONDUCT.md) for community guidelines.

Thank you for using Daylight! 🌙
