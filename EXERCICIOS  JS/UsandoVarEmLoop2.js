const funcs = []

for (var i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })

}

funcs[2]()
funcs[8]()

/*Em resumo:

Variáveis criadas com var  podem ser globais ou escopo de função.

Variáveis/Constantes criadas com let/const  podem ser globais, escopo de função ou escopo de bloco.*/
