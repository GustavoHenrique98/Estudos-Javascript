//Exemplificando a diferença de var e let em relação aos escopos.
// variáveis definidas com a palavra var tem :
// escopo global e escopo de função.
// variáveis definidas com a palavr let tem : 
// escopo global,escopo de função e escopo de bloco.

// Exemplificando agora CORRETAMENTE a diferença entre var e let

var numero = 1

{
    let numero = 2 
    console.log(numero)
}
console.log(numero)   
  // Como var tem escopo global( até onde a variável é vista ) o numero 1 é visualizado aqui
  // Note que o let continua intacto mas com o mesmo nome de variável , pois o let tem escopo de bloco.
// a visualização aqui no console da 1( var numero ) & 2 (let numero no bloco ), pois let opera por blocos.
// mas isso não quer dizer que let opera apenas em blocos , let tbm tem escopo global
// a diferença é que com let você pode repetir o mesmo nome de variável sem que o valor seja alterado.

// exemplo

let numero2 = 2

{
    let numero2 = 3
    console.log("let dentro do bloco com valor "+numero2)  
}
console.log("let fora do bloco (escopo global do let que respeita a mesma variável dentro do bloco) com valor "+numero2)

//O let tbm possui escopo global mas não altera o valor de dentro do let que está dentro do bloco
// Tornando possível a criação de variáveis com o mesmo nome sem a alteração de valores que vou mostrar a seguir com var
//que torna o uso do var para escopo global extremamente perigoso ocasionando bugs no programa sobrepondo o valor mais atual digitado.


var numero5 = 5

{
    var numero5 = 7
    console.log("dentro do bloco"+numero5)
}

console.log("Fora do bloco "+numero5)

