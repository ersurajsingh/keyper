// Listen for messages from the website
window.addEventListener('message', async (event) => {
  // Only accept messages from our website domains
  if (event.data.type === 'REQUEST_IOTA_ADDRESS') {
    try {
      // Request address from background script
      const response = await chrome.runtime.sendMessage({ type: 'GET_IOTA_ADDRESS' });
      
      // Send address back to website
      window.postMessage({
        type: 'IOTA_ADDRESS_RESPONSE',
        address: response.address
      }, '*');
    } catch (error) {
      console.error('Error fetching IOTA address:', error);
      window.postMessage({
        type: 'IOTA_ADDRESS_ERROR',
        error: 'Failed to fetch IOTA address'
      }, '*');
    }
  }
});

// Inject the script from a file
const script = document.createElement('script');
script.src = chrome.runtime.getURL('injected.js');
script.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(script); 