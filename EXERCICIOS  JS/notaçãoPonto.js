// Acessa membros de uma função ou objeto com a sintaxe >> .
console.log()

// Exemplos da notação ponto.
const obj1 = {}
obj1.nome = "Bola" // Como podemos ver usando a notação ponto aqui também para criar um objeto bola em obj1
console.log(obj1.nome) // E aqui estamos acessando nome que está dentro do objeto obj1.

function obj(nome){
    this.nome = nome    // this. torna nome um atributo público.
    this.exec = function(){
        console.log('exec...')
    }
}

const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()