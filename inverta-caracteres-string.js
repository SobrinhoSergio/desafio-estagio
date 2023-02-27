let inputString = "Sérgio Sobrinho O melhor programador"; // string de entrada
let reversedString = ""; // string que receberá a versão invertida

// loop que percorre a string de entrada de trás para frente
for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i]; // adiciona o caractere atual no início da string de saída
}

console.log(reversedString); // exibe a string de saída invertida
