const currentPrice = 100;
const priceAlertForm = document.getElementById('price-alert-form');
const priceThresholdInput = document.getElementById('price-threshold-input');
const priceAlertNotification = document.getElementById('price-alert-notification');
const setAlertBtn = document.getElementById('set-alert-btn');
setAlertBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const priceThreshold = parseFloat(priceThresholdInput.value);
  if (priceThreshold > 0) {
    if (currentPrice >= priceThreshold) {
      priceAlertNotification.innerHTML = `**Price Alert!** ${currentPrice} has reached ${priceThreshold}!`;
    } else {
      priceAlertNotification.innerHTML = `**Price Alert Set!** ${priceThreshold} will be alerted when reached. Current price is ${currentPrice}.`;
    }
  } else {
    priceAlertNotification.innerHTML = '**Invalid Price Threshold!** Please enter a valid price threshold.';
  }
});
