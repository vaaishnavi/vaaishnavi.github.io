// JavaScript for typing effect with different colors for each word

// Function to simulate typing effect for a given text with different colors
function typeTextWithColor(text, element, color) {
  var index = 0;
  var typingInterval = setInterval(function() {
    if (index < text.length) {
      element.innerHTML += '<span style="color:' + color + '">' + text.charAt(index) + '</span>';
      index++;
    } else {
      clearInterval(typingInterval);
      setTimeout(function() {
        deleteText(element);
      }, 1000); // Time to wait before deleting text (milliseconds)
    }
  }, 100); // Typing speed (milliseconds)
}

// Function to simulate deleting text
function deleteText(element) {
  var text = element.innerHTML;
  var index = text.length;

  // Instantly clear text to prepare for the next word
  element.innerHTML = '';

  // Type next word after clearing text
  typeNextWord();
}

// Array of words and their corresponding colors
var wordsAndColors = [
  { word: "developing backend @ GTWebDev & GT iOS", color: "pink" },
  { word: "designing UI/UX content @ Ramblin' Reck Club", color: "orange" },
  { word: "researching drone/satellite technologies @ GC LLC", color: "yellow" }
];
var currentIndex = 0;

// Function to type next word with its color
function typeNextWord() {
  currentIndex = (currentIndex + 1) % wordsAndColors.length;
  var wordObject = wordsAndColors[currentIndex];
  typeTextWithColor(wordObject.word, document.getElementById("text-feature"), wordObject.color);
}

// Call typeTextWithColor for the first word when the page loads
window.onload = function () {
  var firstWordObject = wordsAndColors[currentIndex];
  typeTextWithColor(firstWordObject.word, document.getElementById("text-feature"), firstWordObject.color);
};


const text = "hi, <span style=\"color: turquoise;\">Vaishnavi</span> here.";
let index = 0;

function type() {
  const typedText = document.getElementById("typedText");
  typedText.innerHTML += text[index];
  index++;
  if (index < text.length) {
    setTimeout(type, 100); // Adjust typing speed here (milliseconds)
  }
}

type();





