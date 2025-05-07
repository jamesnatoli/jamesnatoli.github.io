console.log("Hello, world!");

function getRandomNumber() {
  return Math.random();
}

// Generate a random number between 0 (inclusive) and 1 (exclusive)
let randomNumber = getRandomNumber();
console.log(randomNumber);

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInteger = getRandomInt(1, 10); // Generates a random integer between 1 and 10
console.log(randomInteger);
