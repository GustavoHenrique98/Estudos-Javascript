/* Objetos JavaScript :
Objetos em java script são coleções de chaves e valores (Propriedades.)

Exemplo a baixo : 
*/ 

const prod1={};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.15;
prod1['Desconto legal'] = 0.40;  // Evite atributos com espaço.

console.log(prod1);
// Abaixo vamos visualizar uma propriedade específica , escolhi a propriedade nome dentro do objeto prod1.
console.log(prod1.nome);


// Outra forma de criar propriedades de obejtos 
const prod2 = {
    nome:'Camisa Polo' , 
    preco : 79.90
};
console.log(prod2);