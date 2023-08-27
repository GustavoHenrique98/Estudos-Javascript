// Função sem retorno.. NOTA: A função sem retorno ela se diferencia por ser exibida em qualquer
// parte de uma linha de código.
function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3);
// Função com retorno : a função com retorno é exibida dentro de um console.log ou qualquer 
//comando para impirmir por possuir retorno,outra forma de exibir.

// Na função abaixo podemos atribuir valores padrões aos parâmetros.

function soma (a,b = 0){
    return a+b
}

let c = 2;
let d = 3;

console.log("O Resultado da soma de " + c + " + " + d+ " foi : "+ (soma(c,d)));
console.log(`O resultado da soma de ${c} + ${d} e : ${soma(c,d)}`);
//Da pra usar com template strings.


//O que é função gustavo?
// Conceito de função : Uma função executa um processo baseado na sentença de código
//ela define um bloco associado
//ou seja a função é um bloco de código que agrupa várias sentenças que
// você pode chamar quantas vezes você quiser para exercer uma função propriamente dita.

