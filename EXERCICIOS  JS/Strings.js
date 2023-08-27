// Aula sobre o tipo string.
/**
 * Strings podem ser representadas de 3 formas.
 * Com áspas duplas ("")
 * Com áspas simples ('')
 * Com crase
 */

//Agora vamos aprender a retonar uma determinada letra de uma string com o comando .charArt();
// A contagem sempre começa com 0 em diante.

const escola = "Cod3r";
console.log(escola.charAt(4));  
//O comando .charAt(); exibe o caractere do indíce de acordo com o valor do índice digtado.
// O valor que irá retornar  no console.log é "R";
// Uma curiosidade e que nesta em JavaScript ele não irá retornar nada
// Pois a palavra Cod3r possui apenas 4 palavras.
console.log(escola.charCodeAt(3)); 
//Exibe no console o valor da letra na tabela Unicode
                                   
console.log(escola.indexOf("d")); 
// Este comando revela o índice de determinada string
// ( O número de 0 até a quantidade total de índices)


console.log(escola.substring(1)); 
// ESse comando exibe a partir da letra que eu quero pela quual                                 
//a string comece  
// baseado no número de indice que eu digito entre parênteses aqui no caso vai  
//aparecer apeenas od3r ( A contagem é de 0 até o ultimo caractere da string.   ) 

console.log(escola.substring(0,3));
//  Já nesta forma que fiz eu delimitei que ele deveria visualizar o 
///caractere do índice 0 a 3! Retornando no console o valor "COD"

console.log(escola.replace(3,"e"));
// O  comando .replace troca o valor de um índice de uma string definida pelo desenvolvedor como vimos a cima
// o valor 3 é referente a caractere (cod>>>>3<<<<<r) ,  e foi exibido no lugar dele o "e" formando
// corretamente a palavra "coder" no console.log

console.log("escola ".concat(escola).concat (" !! "));
// o comando .concat serve para concatenar (juntar)
console.log("ana,maria,pedro".split(','))
// O comando .split gera um array utilizando as strins presentes na sentença de código.



