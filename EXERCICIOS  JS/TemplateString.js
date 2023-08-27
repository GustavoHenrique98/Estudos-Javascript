/* Template string é um modelo de string que facilita a vida do desenvolvedor na hora de codar
 Ele é inserido com áspas de crase ex:` o total de 1+1 é  ${1+1}` , 
automaticamente ele também reconhece quando o desenvolvedor da um entender (espaço nas linhas)
resumindo , ele é muito melhor pra codar pqp é do caralho , dez mil vezes melhor do que sair usando
um monte de + pra concatenar!
*/
 

const nome = "rebeca ";
const concatenacao = "Olá" + nome + "!!" ;
const Template = `Olá`
console.log(concatenacao);
console.log(`olá ${nome} tudo bem com você? 
estou aqui para te falar que 1+1 é igual a : ${1+1}`);
console.log(`1+1 e igual a ${1+1}`);

const up = texto => texto.toUpperCase(); // função para dar capsLock automaticamente em qualquer frase
console.log(`ei... ${up('cuidado')}`);