// Desafio 10
function techList(tech, inName) {
  let message = [];
  let orderedTech = tech.sort();
  let finalList = [];
  if (orderedTech.length !== 0) {
    for (let index in orderedTech) {
      let list = {
        name: inName,
        tech: orderedTech[index],
      };
      finalList.push(list);
      message = finalList;
    }
  } else {
    message = 'Vazio!';
  }
  return message;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let part1 = '';
  let part2 = ''; 
  let part3 = '';
  let message;
  // VERIFICAÇÕES
  // Verifica tamanho igual a 11.
  let tamanho = numbers.length === 11;
  if (!tamanho) {
    message = "Array com tamanho incorreto."
    return message; 
  }
  // Verifica números entre 0 e 9.
  let domain = true;
  for (let index = 0; index < numbers.length; index += 1) {
    domain = numbers[index] >= 0 && numbers[index] <= 9;
    if (!domain) {
      domain = false;
      message = "não é possível gerar um número de telefone com esses valores";
      break;
   }
  }
  // Não se repete 3x ou mais.
  let tested = true;
  for (let index = 0; index < numbers.length; index += 1) {
    let numberTested = numbers[index];
    if (!tested) {
     break;
   }
    let count = 0;
    for (let index = 0; index < numbers.length; index += 1) {
     if (numberTested === numbers[index]) {
       count += 1;
     }
      if (count > 2) {
       tested = false;
       message = "não é possível gerar um número de telefone com esses valores"
       break;
      }  
   }
  }
  // PASSOU EM VERIFICAÇÕES - MONTA NÚMERO
   if (tamanho && domain && tested) {
     for (let index = 0; index < 2; index += 1) {
       part1 = part1 + numbers[index];  
     }
     for (let index = 2; index < 7; index += 1) {
       part2 = part2 + numbers[index];  
     }
     for (let index = 7; index < 11; index += 1) {
       part3 = part3 + numbers[index];  
     }
     message = '(' + part1 + ') ' + part2 + '-' + part3; 
   } 
   return message;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let a = lineA;
  let b = lineB;
  let c = lineC;
  let message = false;

  let test1 = b + c > a;
  let test2 = a + c > b;
  let test3 = a + b > c;

  if (test1 && test2 && test3) {
    message = true;
  }
  return message;
}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let message;
  let count = 0;
  for (let i = 0; i < frase.length; i += 1) {
    let n = parseFloat(frase[i]);
    let isANumber = n > 0;
    if (isANumber) {
      count = count + n;
    }
  }
  if (count === 1) {
    message = '1 copo de água';
  } else {
    message = count + ' copos de água';
  }
  return message;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
