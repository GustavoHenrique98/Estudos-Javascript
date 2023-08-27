// par nome valor 
/**
 * O que é contexto léxico?
 * É o local onde sua variável foi definida fisicamente no código.
 */
// par nome/valor 
const saudacao  = "opa" //contexto léxico 1

function exec(){
    const saudacao = "falaa" // contexto léxico 2
    return saudacao
}
console.log(exec())  // Nota-se que a constante saudação não gera conflito pois estão em contextos léxicos 
                    //diferentes.
console.log(saudacao)

// Objetos são grupos aninhados de pares nome/valor (propriedades)

const clientes = {
    nome: "pedro",
    idade  : 30 ,
    peso : "60 Kg",
    endereço : {
        logradouro : 'Rua muito legal',
        numero : "972 B ",
        nome:   "gustavo",
        idade: "24 anos",
        peso: "78"
    
    }
}
console.log(clientes.endereço)
// Neste caso acima também podemos repetir nomes de propriedades no oobjeto endereço,
// que se encontra dentro do objeto cliente ,         
// pois as propriedades nome,idade,peso,endereço fazem parte do objeto clientes que se encontram em outro
//contexto léxico.
console.log(clientes)