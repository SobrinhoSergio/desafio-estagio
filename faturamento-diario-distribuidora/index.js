// importando o conteúdo do arquivo json 
var sourceData = require('./assets/dados.json');

// função que calcula o menor e maior valor de faturamento ocorrido em um dia do mês
function dist(arryObjt) {
    // declarando e inicializando as variáveis com o conteúdo do primeiro elemento do vetor
    let menorFatDay = arryObjt[0].valor;
    let maiorFatDay = arryObjt[0].valor;

    // percorre e compara os elementos do array de objetos 
    for (let i = 1; i < arryObjt.length; i++){
        // desvio condicional relacionado ao atributo 'valor'
        if(arryObjt[i].valor > maiorFatDay){
            // armazena na variavel o maior valor de faturamento encontrado no mês
            maiorFatDay = arryObjt[i].valor; 
        } else if(arryObjt[i].valor !=0 && arryObjt[i].valor < menorFatDay){
            // armazena na variavel o menor valor de faturamento encontrado no mês
            menorFatDay = arryObjt[i].valor;
        }
    }
    // retorna o resultado da lógica aplicada acima
    console.log(`O menor valor de faturamento ocorrido em um dia do mês: R$ ${menorFatDay.toFixed(2)}`);
    console.log(`O maior valor de faturamento ocorrido em um dia do mês: R$ ${maiorFatDay.toFixed(2)}`);
}
// chama a função com a variável sourceData como parâmetro
dist(sourceData);

// função que calcula a média mensal de faturamento e informa quais dias do mês o valor de faturamento superou a média mensal 
function mediaMensal(arryObjct){

    // declarando e inicializando as variáveis
    let billingDays = 0; // representa os dias 'úteis', em que houveram faturamento.
    let sumTotalFat = 0;   // representa a soma dos faturamentos diários
    let monthMean = 0; // representa a média mensal de faturamento
    let dayOver= 0; // representa o número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    // descobrir o menor e maior faturamento ocorrido em um dia do mês
    // percorre e compara os elementos do array de objetos
    for(let i=0; i<arryObjct.length; i++){
        // caso o conteúdo do atributo valor seja diferente de 0 o laço incrementa a variável "billingDays" e ignora os dias em que não houveram faturamento
        if(arryObjct[i].valor != 0){
            billingDays++;
        }
        // caso o conteúdo do atributo valor seja diferente de 0 o laço realiza a soma dos faturamentos diários e armazena na variável "sumTotalFat"
        if(arryObjct[i].valor !=0){
            sumTotalFat += arryObjct[i].valor;
        }
    }
    // fórmula da média mensa de faturamento (faturamento / período)
    monthMean = sumTotalFat/billingDays;
    console.log(`Média de faturamento mensal: R$ ${monthMean.toFixed(2)}`);

    // descobrir o número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
    // novamente percorre e compara os elementos do array de objetos 
    for(let i=0; i<arryObjct.length; i++){
        // caso o conteúdo do atributo valor seja diferente de 0 e maior que a média mensal, incrementa a variável "dayOver"
        if(arryObjct[i].valor != 0 && arryObjct[i].valor > monthMean){
            dayOver++
        }
    }
    console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${dayOver} dias`);
}
// chama a função com a variável sourceData como parâmetro
mediaMensal(sourceData);