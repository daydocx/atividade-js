// Defina valores para as variáveis
let nomeProduto = "Notebook";
let precoProduto = 1500;
let descontoProduto = 0.2;
let descontoValido = true;
let precoFinal;

// Verificação de desconto
if (descontoValido) {
    precoFinal = precoProduto - (precoProduto * descontoProduto);
    console.log(`O produto ${nomeProduto} tem um preço de R$ ${precoFinal}.`);
}
else {
    precoFinal = precoProduto;
    console.log(`O produto ${nomeProduto} tem um preço de R$ ${precoFinal}.`);
}

// Verificação de preço final
if (precoFinal > 1000) 
    precoFinal -= 50;
    console.log(`O preço final do produto ${nomeProduto} agora é R$ ${precoFinal}.`);

const demandas = [10, 2, 1, 30, 5];
const pagamentos = [];
let total = 0;

for (let i = 0; i < demandas.length; i++) {
const pagamento = demandas[i] * 59;
pagamentos.push(pagamento);
console.log(`O cliente ${i+1} deverá pagar: R$${pagamento}`);
total += pagamento;
}

console.log(`O total de lucro é de R$${total}.`);
