//Um código é organizado em sentenças de código que podem ou não terminar com ponto e vírgula
// e também são organizados em blocos de código e esses blocos são delimitados por chaves
/* Definição de sentença de código:
É uma ordem que você da a o computador para executar determinada função
que independente se ela está quebrada em linhas diferentes ela funcionará 
num sistema de passo a passo, ou seja, linha de código não necessariamente
é uma sentença de código, levando em consideração que uma  única sentença 
de código pode ser escrita em várias linhas.
*/
//Exemplo abaixo:

console
.log("Exemplo de sentença de código quebrada em várias linhas de código");

/*
Blocos de código:
Blocos de código são agrupadores de sentenças de código com o objetivo de agrupa-las e em alguns
comandos do JavaScript eles são necessários para a sentença de código funcionar.

exemplo : 
let a = 1
let b = 2

if(a>b){
    console.log(1+"É maior que 2")
}
No exemplo acima o comando IF só funciona se você usar blocos.

*/

/*
 Blocos podem ser agrupados dentro de blocos, abaixo temos um exemplo
*/

{
    console.log("Bloco 1")
    {
        console.log("bloco 1")
    }

}