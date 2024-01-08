const words = [
  "hangman",
  "javascript",
  "developer",
  "programming",
  "html",
  "css",
  "web",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let correctLetters = [];
let wrongLetters = [];
let hangmanImageIndex = 0;

const wordContainer = document.getElementById("word-container");
const wrongLettersContainer = document.getElementById(
  "wrong-letters-container"
);
const hangmanImage = document.getElementById("hangman-image");
const message = document.getElementById("message");

function displayWord() {
  wordContainer.innerHTML = selectedWord
    .split("")
    .map((letter) => (correctLetters.includes(letter) ? letter : "_"))
    .join(" ");

  const isWordComplete =
    wordContainer.innerText.replace(/ /g, "") === selectedWord;
  if (isWordComplete) {
    message.innerText = "Congratulations! You guessed the word!";
  }
}

function displayWrongLetters() {
  wrongLettersContainer.innerHTML = `Wrong Letters: ${wrongLetters.join(", ")}`;
}

function displayHangmanImage() {
  hangmanImage.style.backgroundImage = `url('hangman${hangmanImageIndex}.png')`;
}

function checkGameOver() {
  if (wrongLetters.length === 6) {
    message.innerText = `Game Over! The word was "${selectedWord}"`;
  }
}

function restartGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  correctLetters = [];
  wrongLetters = [];
  hangmanImageIndex = 0;
  message.innerText = "";

  displayWord();
  displayWrongLetters();
  displayHangmanImage();
}

function handleKeyPress(event) {
  const key = event.key.toLowerCase();

  if (
    /[a-z]/.test(key) &&
    !correctLetters.includes(key) &&
    !wrongLetters.includes(key)
  ) {
    if (selectedWord.includes(key)) {
      correctLetters.push(key);
    } else {
      wrongLetters.push(key);
      hangmanImageIndex++;
    }

    displayWord();
    displayWrongLetters();
    displayHangmanImage();
    checkGameOver();
  }
}

// Initial display
displayWord();
displayHangmanImage();

// Event listener for key press
document.addEventListener("keydown", handleKeyPress);
