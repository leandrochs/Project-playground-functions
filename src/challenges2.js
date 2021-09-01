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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
