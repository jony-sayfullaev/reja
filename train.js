// Challenge_3 => Sezar

const alphabet = "abcdefghijklmonpqrstuvwxywz";
let code = 2;
const message = "hello, how are you doing ?";

function decodeMessage(message, secret) {
  let lowerCaseLetter = message.toLowerCase();
  let letters = alphabet.split("");
  let new_str = "";

  for (let i = 0; i < lowerCaseLetter.length; i++) {
    let currentLetter = lowerCaseLetter[i];
    if (currentLetter === " ") {
      new_str += currentLetter;
      continue;
    }
    let currentIndex = letters.indexOf(currentLetter);
    let new_index = currentIndex + secret;
    if (new_index > 25) new_index = new_index - 26;
    if (new_index < 0) new_index = new_index + 26;
  }
}

decodeMessage(message);
