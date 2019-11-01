// Function that generates a random quote from quotes array in quotes.js

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function that prints random quote to index.html

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  html += `</p>`;

  document.getElementById("quote-box").innerHTML = html;
}

function reload {

}

// Click Event listener, loads quote when button is pushed.

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

