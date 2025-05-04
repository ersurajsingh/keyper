// Constants
const REQUIRED_KAT_BALANCE = 1;
const IOTA_NODE_URL = 'https://api.testnet.shimmer.network';  // Example testnet node

// DOM Elements
const keyperStatus = document.getElementById('keyperStatus');
const publicContent = document.getElementById('publicContent');
const premiumContent = document.getElementById('premiumContent');
const errorContent = document.getElementById('errorContent');
const userAddressSpan = document.getElementById('userAddress');

// Check if Keyper is installed
async function checkKeyperInstallation() {
  // Wait a bit for the extension to inject its script
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (window.keyperInstalled) {
    keyperStatus.textContent = 'Keyper extension detected! Checking token balance...';
    return true;
  } else {
    keyperStatus.textContent = 'Keyper extension not detected. Please install it to access premium content.';
    showError();
    return false;
  }
}

// Get IOTA address from Keyper
async function getIotaAddress() {
  try {
    if (!window.requestIotaAddress) {
      throw new Error('Keyper extension not properly loaded');
    }
    const address = await window.requestIotaAddress();
    if (!address) {
      throw new Error('No address provided');
    }
    return address;
  } catch (error) {
    console.error('Error getting IOTA address:', error);
    keyperStatus.textContent = 'Error getting IOTA address. Is Keyper enabled?';
    showError();
    return null;
  }
}

// Check KAT token balance
async function checkTokenBalance(address) {
  try {
    // For demo purposes, we're simulating the balance check
    // In a real implementation, you would query the IOTA node here
    const response = await simulateTokenBalanceCheck(address);
    return response.balance;
  } catch (error) {
    console.error('Error checking token balance:', error);
    keyperStatus.textContent = 'Error checking token balance';
    showError();
    return 0;
  }
}

// Simulate token balance check (replace with actual IOTA API call)
async function simulateTokenBalanceCheck(address) {
  // This is a mock implementation
  // In production, you would call the IOTA node API to get the actual balance
  return new Promise((resolve) => {
    setTimeout(() => {
      // For demo purposes, we'll consider the demo address to have tokens
      const hasTokens = address === "iota1qpg4tq6cgj4yf2lxwfvlmlwrx8w8htj4vqvtxf8kv7r29uyyvd6x4l2fvwz";
      resolve({
        balance: hasTokens ? REQUIRED_KAT_BALANCE : 0
      });
    }, 1000);
  });
}

// Update UI based on access status
function updateUI(hasAccess, address = null) {
  if (hasAccess) {
    publicContent.style.display = 'none';
    premiumContent.style.display = 'block';
    errorContent.style.display = 'none';
    keyperStatus.textContent = 'Access granted! You have the required KAT balance.';
    if (address) {
      userAddressSpan.textContent = address;
    }
  } else {
    showError();
  }
}

// Show error state
function showError() {
  publicContent.style.display = 'block';
  premiumContent.style.display = 'none';
  errorContent.style.display = 'block';
}

// Main initialization function
async function init() {
  if (await checkKeyperInstallation()) {
    const address = await getIotaAddress();
    if (address) {
      const balance = await checkTokenBalance(address);
      if (balance >= REQUIRED_KAT_BALANCE) {
        updateUI(true, address);
      } else {
        keyperStatus.textContent = 'Insufficient KAT balance. You need at least 1 KAT.';
        updateUI(false);
      }
    }
  }
}

// Start the application
init(); 