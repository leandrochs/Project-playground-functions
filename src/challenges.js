/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(value1, value2) {
  let message = '';
  if (value1 === true && value2 === true) {
    message = true;
  } else {
    message = false;
  }
  return message;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let words = [];
  let letters = '';
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      letters += sentence[index];
    } else {
      words.push(letters);
      letters = '';
    }
  }
  words.push(letters);
  return words;
}

// Desafio 4
function concatName(insertArray) {
  let lasName = insertArray[insertArray.length - 1];
  let firstName = insertArray[0];
  let concat = `${lasName} + ', ' + ${firstName}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (higherNumber < numbers[index + 1]) {
      higherNumber = numbers[index + 1];
    }
  }
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (higherNumber === numbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = ((mouse - cat1) ** 2) ** (1 / 2);
  let distanceCat2 = ((mouse - cat2) ** 2) ** (1 / 2);
  let message = '';
  if (distanceCat1 < distanceCat2) {
    message = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    message = 'cat2';
  } else {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
}

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    let n = numbers[index];
    newArray.push(fbTest(n));
  }
  return newArray;
}

function fbTest(n) {
  let newArray = 'bug!';
  if (n % 3 === 0 && n % 5 !== 0) {
    newArray = 'fizz';
  } else if (n % 15 === 0) {
    newArray = 'fizzBuzz';
  } else if (n % 3 !== 0 && n % 5 === 0) {
    newArray = 'buzz';
  }
  return newArray;
}

// Desafio 9
function encode(phrase) {
  let newPhrase = [];
  let newLetter;
  for (let index = 0; index < phrase.length; index += 1) {
    let letter = phrase[index];
    newLetter = convertLetter(letter);
    newPhrase += newLetter;
  }
  return newPhrase;
}
function convertLetter(letter) {
  let key = ['a', '1', 'e', '2', 'i', '3', 'o', '4', 'u', '5'];
  for (let i = 0; i < key.length; i += 2) {
    if (letter === key[i]) {
      letter = key[i + 1];
      break;
    }
  }
  return letter;
}

function decode(phrase) {
  let newPhrase = [];
  let newLetter;
  for (let index = 0; index < phrase.length; index += 1) {
    let letter = phrase[index];
    newLetter = convertLetter2(letter);
    newPhrase += newLetter;
  }
  return newPhrase;
}
function convertLetter2(letter) {
  let key = ['a', '1', 'e', '2', 'i', '3', 'o', '4', 'u', '5'];
  for (let i = 1; i < key.length; i += 2) {
    if (letter === key[i]) {
      letter = key[i - 1];
      break;
    }
  }
  return letter;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
