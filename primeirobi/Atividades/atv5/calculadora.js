const valorConta = 100;
const porcentagemGorjeta = 10;
const valorGorjeta = valorConta * (porcentagemGorjeta / 100);
const valorTotal = valorConta + valorGorjeta
console.log(valorTotal)

console.log("valor da conta: R$" + valorConta.toFixed(2) + ", Gorjeta (10%): R$" + porcentagemGorjeta.toFixed(2) + ", Total a pagar: R$" + valorTotal.toFixed(2))
