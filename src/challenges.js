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
  let concat;
  concat = insertArray[insertArray.length - 1] + ', ' + insertArray[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
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
  // seu código aqui
  let distanceCat1 = ((mouse - cat1) ** 2) ** (1 / 2);
  let distanceCat2 = ((mouse - cat2) ** 2) ** (1 / 2);
  if (distanceCat1 < distanceCat2) {
    let message = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    let message = 'cat2';
  } else {
    let message = 'os gatos trombam e o rato foge';
  }
  return message;
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let newArray = []
  for (let index = 0; index < numbers.length; index += 1) {
    let number = numbers[index];
    let testFizz = number % 3 === 0;
    let testBuzz = number % 5 === 0;
    let testFizzBuzz = number % 5 === 0 && number % 3 === 0;
    if (testFizz) {
      if (testBuzz){
        newArray.push("fizzBuzz")
      } else {
        newArray.push("fizz")
      }
    } else {
      if (testBuzz) {
        newArray.push("buzz")
      } else {
        newArray.push("bug!")
      }
    } 
  }
return newArray;
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
