# Keyper - IOTA-Based Access Control System

Keyper is a web-based access control system that utilizes IOTA native tokens as digital keys. Owning a specific amount of a designated IOTA token grants users access to different content or features on a website.

## Project Structure

```
keyper/
├── extension/           # Chrome extension files
│   ├── manifest.json
│   ├── content.js
│   ├── background.js
│   └── popup/
│       ├── popup.html
│       ├── popup.js
│       └── popup.css
├── website/            # Keyper-enabled website
│   ├── index.html
│   ├── styles.css
│   └── main.js
└── README.md
```

## Access Token Definition

- Token Name: Keyper Access Token (KAT)
- Token Symbol: KAT
- Required Balance: 1 KAT for premium access

## Development Setup

1. Install the Chrome extension:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `extension` directory

2. Run the website:
   - Navigate to the `website` directory
   - Open `index.html` in a web browser

## Security Considerations

This is a prototype implementation. For production use, consider:
- Moving token balance checks to a backend server
- Implementing proper authentication mechanisms
- Using secure communication channels
- Implementing proper key management

## License

MIT 