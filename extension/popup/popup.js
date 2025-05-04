document.addEventListener('DOMContentLoaded', async () => {
  const statusDiv = document.getElementById('status');
  const addressDiv = document.getElementById('address');
  const toggleButton = document.getElementById('toggleButton');

  // Load initial state
  const { iotaAddress, isEnabled } = await chrome.storage.local.get(['iotaAddress', 'isEnabled']);
  updateUI(isEnabled, iotaAddress);

  // Handle toggle button click
  toggleButton.addEventListener('click', async () => {
    const { isEnabled } = await chrome.storage.local.get('isEnabled');
    const newState = !isEnabled;
    await chrome.storage.local.set({ isEnabled: newState });
    updateUI(newState, iotaAddress);
  });

  function updateUI(isEnabled, address) {
    // Update status
    statusDiv.className = `status ${isEnabled ? 'enabled' : 'disabled'}`;
    statusDiv.textContent = isEnabled ? 'Keyper is active' : 'Keyper is disabled';
    
    // Update button
    toggleButton.textContent = isEnabled ? 'Disable Keyper' : 'Enable Keyper';
    
    // Update address display
    addressDiv.textContent = isEnabled ? address : 'Keyper is disabled';
  }
}); 