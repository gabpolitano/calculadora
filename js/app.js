let primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
let segundoValor = parseInt(prompt("Digite o segundo valor:"));

let operacao = prompt(" Digite 1 para soma:\n Digite 2 para subtração:\n Digite 3 para multiplicação:\n Digite 4 para divisão:");

if (operacao == 1) {
    let resultado = primeiroValor + segundoValor;
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>");

} else if (operacao == 2) {
    let resultado = primeiroValor - segundoValor;
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>");

} else if (operacao == 3) {
    let resultado = primeiroValor * segundoValor;
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>");

} else if (operacao == 4) {
    let resultado = primeiroValor / segundoValor;
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>");
} else {
    document.write("<h2>Opção Inválida</h2>");
}

//Escrever na tela - document.write
//Concatenação (juntar palavra com variáveis) - ("palavra" + variável)
//Variáveis de operações
// == para comparação, = para atribuição

//if = se
//else = senão
//else if = senão se