/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

let quotes = [
  {
    quote:
      "A man who procrastinates in his choosing will inevitably have his choice made for him by circumstance.",
    source: "Hunter S. Thompson",
    citation: "The Proud Highway: Saga of a Desperate Southern Gentleman",
    year: "1955-1967"
  },
  {
    quote:
      "Today, a young man on acid realized that all matter is merely energy condensed to a slow vibration – that we are all one consciousness experiencing itself subjectively. There is no such thing as death, life is only a dream, and we are the imagination of ourselves. Here's Tom with the weather.",
    source: "Bill Hicks",
    citation: "Sane Man",
    year: "1989"
  },
  {
    quote:
      "In our obscurity - in all this vastness - there is no hint that help will come from elsewhere to save us from ourselves. It is up to us.",
    source: "Carl Sagan",
    citation: "Pale Blue Dot",
    year: "1990"
  },
  {
    quote: "Turn on, tune in, drop out.",
    source: "Timothy Leary",
    citation: "Human Be-In",
    year: "1967"
  },
  {
    quote: "Inside every cynical person, there is a disappointed idealist.",
    source: "George Carlin"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

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

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
