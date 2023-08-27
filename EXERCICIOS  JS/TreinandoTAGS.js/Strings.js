// 1º)exiba o caractere de um índice de uma variável qualquer .
let variavelQ = "GUSTAVO";

console.log(variavelQ.charAt(4));
// 2º) Exiba no console o  valor de um índice em unicode;
console.log(variavelQ.charCodeAt(4));
// 3º) Exiba o valor da string em formato de índice da variável criada acima;
console.log(variavelQ.indexOf("A"));
// 4º) Exiba no console.log o valor "stavo" da variavél criada a cima.
console.log(variavelQ.substring(5));
// 5º) Altere e exiba no console.log  um caractere qualquer da variável criada a cima.
console.log(variavelQ.replace("GUSTAVO","HENRIQUE"));
// 6º) Converta strings em arrays com .split.
console.log(`ana,maria,katia`.split(','));

