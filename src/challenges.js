// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
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
  // seu código aqui
  let concat = insertArray[insertArray.length - 1] + ', ' + insertArray[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
