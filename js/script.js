// Reload new quote after 20 seconds.

let interval = window.setInterval(printQuote, 20000);

// Array of background colors

let bgColors = [
  "#5e4491",
  "#3177ab",
  "#8f7952",
  "#0a4041",
  "#299432",
  "000000",
  "#6397d3",
  "#ad545a",
  "#2a3746",
  "#78100d"
];

// Picks a random background color from bgcolors

function pickRandombgColor() {
  return (document.body.style.backgroundColor =
    bgColors[Math.floor(Math.random() * bgColors.length)]);
}

// Generates a random quote from quotes array in quotes.js

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Prints random quote to index.html and changes background

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

  if (randomQuote.tags) {
    html += `<p class="tags">${randomQuote.tags}</p>`;
  }

  document.getElementById("quote-box").innerHTML = html;
  pickRandombgColor();
}

// Click Event listener, loads quote when button is pushed.

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
