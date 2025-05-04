window.keyperInstalled = true;
window.requestIotaAddress = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener('message', function handler(event) {
      if (event.data.type === 'IOTA_ADDRESS_RESPONSE') {
        window.removeEventListener('message', handler);
        resolve(event.data.address);
      } else if (event.data.type === 'IOTA_ADDRESS_ERROR') {
        window.removeEventListener('message', handler);
        reject(new Error(event.data.error));
      }
    });
    window.postMessage({ type: 'REQUEST_IOTA_ADDRESS' }, '*');
  });
}; 