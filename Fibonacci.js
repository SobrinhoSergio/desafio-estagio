// Definindo o número a ser verificado na sequência de Fibonacci
const numberToCheck = 4;

// Definindo as duas primeiras posições da sequência de Fibonacci
let previous = 0;
let current = 1;

// Percorrendo a sequência de Fibonacci até encontrar um número maior ou igual ao número a ser verificado
while (current < numberToCheck) {
  // Calculando o próximo número da sequência de Fibonacci
  const next = previous + current;
  // Atualizando os valores anteriores
  previous = current;
  current = next;
}

// Verificando se o número informado pertence ou não à sequência de Fibonacci
if (current === numberToCheck) {
  console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
