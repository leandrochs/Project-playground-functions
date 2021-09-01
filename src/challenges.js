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
  let concat = lasName + ', ' + firstName;
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
    let number = numbers[index];
    let testFizz = number % 3 === 0;
    let testBuzz = number % 5 === 0;
    if (testFizz) {
      if (testBuzz) {
        newArray.push('fizzBuzz');
      } else {
        newArray.push('fizz');
      }
    } else if (testBuzz) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(phrase) {
  let newPhrase = [];
  for (let index = 0; index < phrase.length; index += 1) {
    let letter = phrase[index];
    if (letter === 'a') {
      letter = 1;
    } else if (letter === 'e') {
      letter = 2;
    } else if (letter === 'i') {
      letter = 3;
    } else if (letter === 'o') {
      letter = 4;
    } else if (letter === 'u') {
      letter = 5;
    }
    newPhrase += letter;
  }
  return newPhrase;
}

function decode(phrase) {
  let newPhrase = [];
  for (let index = 0; index < phrase.length; index += 1) {
    let letter = phrase[index];
    if (letter === '1') {
      letter = 'a';
    } else if (letter === '2') {
      letter = 'e';
    } else if (letter === '3') {
      letter = 'i';
    } else if (letter === '4') {
      letter = 'o';
    } else if (letter === '5') {
      letter = 'u';
    }
    newPhrase += letter;
  }
  return newPhrase;
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
