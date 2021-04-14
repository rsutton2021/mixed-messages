let quoteButton = document.getElementById('quote-button');
let quoteText = document.getElementById('quote-text');

// Write your code here:

function showQuote() {
  quoteText.style.display = 'block';
}
quoteButton.addEventListener('click', showQuote);