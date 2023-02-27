// Definindo o faturamento mensal de cada estado
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// Calculando o faturamento total da distribuidora
const faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Calculando o percentual de representação de cada estado no faturamento total
const percentualSP = (faturamentoSP / faturamentoTotal) * 100;
const percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
const percentualMG = (faturamentoMG / faturamentoTotal) * 100;
const percentualES = (faturamentoES / faturamentoTotal) * 100;
const percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

// Exibindo o percentual de representação de cada estado no faturamento total
console.log(`Percentual de representação no faturamento total:
- SP: ${percentualSP.toFixed(2)}%
- RJ: ${percentualRJ.toFixed(2)}%
- MG: ${percentualMG.toFixed(2)}%
- ES: ${percentualES.toFixed(2)}%
- Outros: ${percentualOutros.toFixed(2)}%`);
