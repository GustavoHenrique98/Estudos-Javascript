// Declaração de variáveis com var.
//Definição de scopo : É o local onde a variável é visível
// portanto var é considerada uma forma de criar variáveis com scopo global( Fica visível fora das blocos de código)
{
    {
        {
            {var sera = "Será que ele vai imprimir?"}
        }
    }
}
console.log(sera)

// Resumão a variável var dentro de um bloco de código que não seja uma função ficará
// visível.
//Exemplo pra explicar melhor

function teste (){
    var local = 123   // note que a variavel local ficou apagada.
}
// vai dar erro pois a variável local está fora da função , console.log(local)  