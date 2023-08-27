// Função aula 2 de JavaScript
// Armazenando uma funçÕES EM VARIÁVEIS
// # Armazenando função Sem retorno em uma variável
const imprimirSoma = function (a,b){
  // Sem retorno a baixo
    console.log(a+b);
}
//chamando a variavel com a função sem retorno atribuida.
imprimirSoma(1,2);
// # Armazenando uma função arrow que é uma maneira mais curta de atribuir a função a variável (Sintaxe curta)
const soma = (a,b) => {
    //sem retorno não precisa de console
    console.log(a+b);
}
//visualizando a variável atribuida com a função arrow
soma(1,1);

// Retorno implícito 
// Nota : No retorno implítico so é possível usar uma linha de código
// Devido a esta forma de atribuir de maneira mais rápida não usar chaves.
// É tambem uma forma de reduzir ao máximo a síntaxe de uma variavel com uma função atribuida.
const subtracao = (a,b) => a-b ; 

console.log(subtracao(2,1));

//outro exemplo

const imprimirTexto = a => console.log(a);

imprimirTexto("Olá javaScript , Obrigado por me fazer passar raiva");



/**
 * O objetivo da aula foi mostrar que somos capazes de armazenar variáveis de diversas formas 
 * utilizamos arrows para atribuir funções a variáveis que é uma maneira mais reduzida que pode ser reduzida
 * até o último exemplo acima.
 * até o momento é isso que sabemos sobre arrows lá na frente saberemos mais , PACIENCIA FILHO DA PUTA TU VAI
 * SAIR DESSA EM NOME DE JESUS ESTUDA DESISTE Não!!!!!
 * Debora , teu pai , tua mãe e todo mundo ta contigo!! 
 */


