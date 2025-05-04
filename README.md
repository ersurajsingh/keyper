# Keyper - IOTA-Based Access Control System

## Project Overview
Keyper is a web-based access control system that utilizes IOTA native tokens as digital keys. Owning a specific amount of a designated IOTA token grants users access to different content or features on a website.

## Project Structure
```
keyper/
├── extension/           # Chrome extension files
│   ├── manifest.json
│   ├── content.js
│   ├── background.js
│   ├── injected.js
│   └── popup/
│       ├── popup.html
│       ├── popup.js
│       └── popup.css
├── public/             # Website files
│   ├── index.html
│   ├── styles.css
│   └── main.js
├── vercel.json         # Vercel configuration
└── README.md
```

## Features
- IOTA token-based access control
- Chrome extension integration
- Secure token balance verification
- Dynamic content management
- User-friendly interface

## Setup Guide

### Step 1: Install the Keyper Chrome Extension
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/keyper.git
   cd keyper
   ```

2. Open Google Chrome and navigate to:
   ```
   chrome://extensions/
   ```

3. Enable Developer Mode:
   - Toggle the "Developer mode" switch in the top-right corner
   - This will reveal additional options for loading unpacked extensions

4. Load the Keyper Extension:
   - Click the "Load unpacked" button
   - Navigate to the `extension` directory in your cloned repository
   - Select the directory and click "Select Folder"

5. Verify Installation:
   - The Keyper extension should appear in your extensions list
   - You should see the Keyper icon in your Chrome toolbar

### Step 2: Access the Demo Website
1. Visit the live demo at:
   ```
   https://keyper-three.vercel.app
   ```
2. Initial Page Load:
   - The website will detect if the Keyper extension is installed
   - You'll see a status message indicating the extension detection

### Step 3: Test Premium Access
1. With the extension installed and enabled:
   - The website will automatically check your token balance
   - If you have the required KAT balance, premium content will be displayed
   - Your IOTA address will be shown in the premium section

2. Demo Account Details:
   - IOTA Address: `iota1qpg4tq6cgj4yf2lxwfvlmlwrx8w8htj4vqvtxf8kv7r29uyyvd6x4l2fvwz`
   - This address has the required KAT balance for premium access

### Step 4: Extension Controls
1. Click the Keyper icon in your Chrome toolbar to:
   - View your current IOTA address
   - Toggle the extension on/off
   - Check the extension status

### Troubleshooting
If you encounter any issues:

1. Extension Not Detected:
   - Ensure the extension is properly installed
   - Check if Developer mode is enabled
   - Try reloading the webpage

2. Premium Content Not Showing:
   - Verify the extension is enabled
   - Check if you're using the correct IOTA address
   - Ensure you have the required KAT balance

3. Website Not Loading:
   - Clear your browser cache
   - Try a different browser
   - Check your internet connection

## Development
- Built with JavaScript
- Uses IOTA network for token verification
- Chrome Extension Manifest V3 compliant

## Security Considerations
- Secure token verification
- Protected communication channels
- Error handling and validation

## License
MIT

## Demo Account
- IOTA Address: `iota1qpg4tq6cgj4yf2lxwfvlmlwrx8w8htj4vqvtxf8kv7r29uyyvd6x4l2fvwz`
- This address has the required KAT balance for premium access

<img width="1439" alt="Screenshot 2025-05-04 at 5 38 55 PM" src="https://github.com/user-attachments/assets/b4ef48f4-0cfa-483a-b186-c98aa26b88cf" />
<img width="1439" alt="Screenshot 2025-05-04 at 5 40 41 PM 1" src="https://github.com/user-attachments/assets/2635badb-d0d1-4679-ba15-04bab03c8231" />

