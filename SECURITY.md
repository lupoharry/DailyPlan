# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in Daylight, please report it responsibly. **Do not** open a public issue on GitHub.

### How to Report

Please email your security concerns to: **[SECURITY_CONTACT_EMAIL]**

Include the following information in your report:

- **Description**: Detailed description of the vulnerability
- **Affected Component**: Which part of the application is affected (e.g., storage, input handling)
- **Steps to Reproduce**: Clear steps to reproduce the issue
- **Impact**: Potential impact or severity of the vulnerability
- **Proposed Fix** (optional): If you have a suggested fix

### Response Timeline

- **Initial Response**: We will acknowledge your report within 48 hours
- **Investigation**: We will investigate and provide an estimated timeline for a fix
- **Resolution**: We will work to resolve the issue as quickly as possible
- **Disclosure**: Once a fix is released, we will credit you (if desired) in the release notes

## Supported Versions

| Version | Supported          |
|---------|------------------|
| 1.0.0   | ✅ Latest release |
| < 1.0.0 | ❌ Not supported  |

Security updates will be released as patch versions (e.g., 1.0.1).

## Security Considerations

### Local Storage Limitations

⚠️ **Important**: This application uses browser Local Storage for data persistence. Users should be aware of these security limitations:

#### Risks

1. **Unencrypted Storage**: Local Storage data is stored in plain text (unencrypted) on the user's device
2. **No Authentication**: The application has no authentication or access control
3. **Same-Origin Policy**: Any website with the same origin can access Local Storage data
4. **Malware**: Malware on the user's device can access Local Storage
5. **USB/Physical Access**: If someone gains physical access to the device, they can access Local Storage data
6. **Browser Extensions**: Malicious browser extensions can access Local Storage

#### Mitigations

Users can protect their data by:

- Using the application on trusted devices only
- Not sharing browser sessions with untrusted users
- Regularly exporting backups to external storage
- Using full disk encryption on their device
- Keeping their browser and OS up to date
- Avoiding untrusted browser extensions
- Clearing browser data when using shared computers

### Input Sanitization

Daylight includes safeguards against common web vulnerabilities:

- **XSS Prevention**: All user-entered text is properly escaped before display
- **HTML Sanitization**: Dangerous HTML patterns are removed from imported data
- **JSON Validation**: Imported JSON files are validated before processing

### No Sensitive Data Collection

- The application does **not** collect personal information
- The application does **not** send data to external servers
- The application does **not** track user behavior
- All data remains under the user's control on their device

### Browser Compatibility

Daylight uses standard, secure browser APIs:

- **Fetch API**: For optional external resources (fonts)
- **Local Storage API**: For persistent data storage
- **Date Objects**: For date calculations
- **Built-in JSON**: For data import/export

All these APIs are widely supported and have security best practices built in.

## Privacy Information

### Data Collection

Daylight does **not** collect, store, or transmit any personal data. The application is entirely client-side:

- No backend server
- No analytics
- No tracking
- No API calls to third-party services (except Google Fonts)

### Google Fonts

The application loads fonts from Google Fonts, which may collect usage statistics. For details, see:
[Google Fonts Privacy Policy](https://policies.google.com/privacy)

Users can disable external font loading by blocking Google Fonts in their browser or using system fonts offline.

### Local Data Ownership

- All journal entries and data are stored exclusively on the user's device
- Users have complete control over their data
- Users can export their data at any time in JSON format
- Users can delete all data by clearing browser storage

## Responsible Disclosure Guidelines

We follow responsible disclosure practices:

1. **No Public Disclosure**: Do not publicly disclose the vulnerability until a fix is available
2. **Give Us Time**: Allow us reasonable time to investigate and develop a fix
3. **Good Faith**: Report vulnerabilities in good faith to help improve security
4. **Avoid Disruption**: Do not exploit the vulnerability or disrupt service
5. **Minimal Proof**: Provide only the minimum information needed to demonstrate the issue

## Security Best Practices for Users

- **Use HTTPS**: When accessing the application through any URL, verify it uses HTTPS
- **Keep Browser Updated**: Always use an up-to-date browser with the latest security patches
- **Regular Backups**: Export your journal data regularly as a backup
- **Device Security**: Protect your device with strong passwords and full disk encryption
- **Trust**: Only use Daylight from trusted sources (official GitHub repository)

## Known Limitations

- **No Encryption at Rest**: Local Storage data is not encrypted
- **No Authentication**: Anyone with browser access can view all data
- **Browser-Specific**: Data doesn't sync across browsers or devices
- **Storage Limit**: Browsers typically limit Local Storage to 5-10MB per origin

## Contact

For security inquiries or responsible disclosure, please contact:

**Email**: [SECURITY_CONTACT_EMAIL]

---

Thank you for helping keep Daylight secure! 🔒
