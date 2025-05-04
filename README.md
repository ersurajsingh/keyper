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

## Installation

### Chrome Extension
1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `extension` directory

### Demo Website
Visit the live demo at: https://keyper-three.vercel.app

## Usage
1. Install the Keyper Chrome extension
2. Visit the demo website
3. The extension will automatically detect and verify your token balance
4. Access premium content based on your token holdings

## Development
- Built with JavaScript
- Uses IOTA network for token verification
- Chrome Extension Manifest V3 compliant

## Demo Credentials
- Demo IOTA Address: `iota1qpg4tq6cgj4yf2lxwfvlmlwrx8w8htj4vqvtxf8kv7r29uyyvd6x4l2fvwz`
- Required KAT Balance: 1

## Security Considerations
- Secure token verification
- Protected communication channels
- Error handling and validation

## License
MIT

## Demo Account
- IOTA Address: `iota1qpg4tq6cgj4yf2lxwfvlmlwrx8w8htj4vqvtxf8kv7r29uyyvd6x4l2fvwz`
- This address has the required KAT balance for premium access