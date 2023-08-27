// Treinando todas as formas de criar funções
//1º) Crie uma função  sem retorno .
function subtracao(a,b){
    console.log(a-b)
}
subtracao(3,2);
//2º) Crie uma função com retorno 
function soma(a,b){
    return a+b
}
console.log(`O resultado da soma foi ${soma(1,2)}`)
//3º) Atribua uma função a uma constante
const multi = function(a,b){
    return a*b
}
console.log(multi(2,2))
//4º) Atribua uma função a uma  constante utilizando arrows e tente enxugar ao máximo o código.
// 1º forma.
const divi  = (a,b) => {
    return(a/b)
}
//2º forma.
const divi2 = (a,b) => a/b
//3º forma.
const saudacao = a => console.log(a)
//Agora vamos exibir as funções.
console.log(divi(10,2));
console.log(divi2(10,2))
saudacao("gustavo")
