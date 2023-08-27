/* Declarando variáveis e constantes no js, como javascript 
Obs: JavaScript é uma linguagem de tipagem fraca portanto 
podemos alterar o tipo de uma mesma variável varias vezes.
(string,number,float etc....)
*/
// #No exemplo abaixo criamos duas variáveis uma usando var e outra usando LET. (Let é a forma mais moderna de criarmos variáveis.)

var a = 3; 
let b = 4 ;
// Agora abaixo vamos alterar as variáveis.
console.log(a+" Valor inicial da variável "+b);
var a = 30;
// let b = 40;  <<< Vai dar erro porque let não tem escopo global
// mas se alterarmos o valor da variável apenas usando o nome dela funcionará.
b = 40;
console.log(a+ " Segundo valor alterado.");

a = 300;
b = 400; 
console.log(a + " Terceiro valor alterado! "+ b);

// Agora vamos declarar uma constante que nada mais é do que um valor fixo de uma variável que jamais poderá ser alterado.

const c = 500;

console.log("Agora temos o valor da constante "+c);




