/*
JavaScript possui tipagem fraca, que basicamente é uma forma dinâmica 
de alterar o valor das variáveis , ou seja 
posso alterar a mesma variável varias vezes em valor e tipo , diferente
de uma linguágem de tipagem estática onde o tipo da variável e determinado na criação da mesma,
além de permitir que algumas strings possam ser lidas como tipo number. 

*/  
let qualquer = "legal";
console.log(qualquer);
console.log(typeof qualquer);
// No exemplo acima  a variável esta no tipo string.
qualquer = 1.3215
console.log(qualquer);
console.log(typeof qualquer);
// No segundo exemplo podemos ver que a variável "Qualquer" foi alterada para tipo: Number.

/*
Agora abaixo vamos mostrar alguns exemplos de variáveis com nomes genéricos que NÂO DEVEM SER USADOS.
 */

let valor = '';
let numero = 1 ;
let pqp = false // produto