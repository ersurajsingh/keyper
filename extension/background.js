// Mock IOTA address for demonstration
const DEMO_IOTA_ADDRESS = "iota1qpg4tq6cgj4yf2lxwfvlmlwrx8w8htj4vqvtxf8kv7r29uyyvd6x4l2fvwz";

// Store the IOTA address in extension storage
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ 
    iotaAddress: DEMO_IOTA_ADDRESS,
    isEnabled: true
  });
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_IOTA_ADDRESS") {
    chrome.storage.local.get(['iotaAddress', 'isEnabled'], (result) => {
      if (result.isEnabled) {
        sendResponse({ address: result.iotaAddress });
      } else {
        sendResponse({ address: null });
      }
    });
    return true; // Required for async response
  }
}); 