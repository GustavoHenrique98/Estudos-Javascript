// Notas do tipo number . 
// O tipo number serve tanto para número inteiro quanto número quebrado.
// Se consultar se o tipo do número e inteiro com o comando Number.isInteger(nomedavariavel); 
// o valor retornado será inteiro(true no console), mas se trocarmos o valor inteiro (1.0) para 1.1 ele
//indicara no console com este comando no console que e false . 

const peso1 = 1.0 ; // forma normal de criar variáveis.
const peso2 = Number ('2.0'); // outra forma de criar variáveis, aparentemente esse comando transforma string em número.
                              // 

console.log(peso1,peso2);
console.log(Number.isInteger(peso1)); // Comando para mostrar se o a variável do tipo number é inteira.

const avaliacao1= 9.871;
const avaliacao2 = 6.871;
const total = (avaliacao1*peso1) + (avaliacao2*peso2);
const media = total/(peso1+peso2);
console.log(media);
console.log(media.toFixed(2)); // O comando to fixed serve para pular casas decimais de acordo com o valor que você designa
                                // como por exemplo nesse console.log designei que o resultado deveria pular
                                // 2 casas na exibição com console.log
console.log(typeof media);
console.log(typeof Number); // Nota : Number com N maiúsculo ele é uma função , ja com n minúsculo é o TIPO! 

