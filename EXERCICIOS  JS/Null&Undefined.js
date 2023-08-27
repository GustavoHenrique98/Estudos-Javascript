let valor  // não inicializada
// A variável valor não possui nenhum valor definido,
console.log(valor);
//console.log(valor2); Aqui ocorre o erro de referencia pois a esta variavel nem foi declarada!

// Significado de null : 
// Diferença entre null & undefined : 
// Undefined : Significa que tem uma variável que ela foi declarada mas não pode ser usada por não possuir
// valor e nunca ter sido "inicializada"
// Null : null significa que se você tem uma variável ela não está apontando
// Para nenhum indereço de memória mas foi declarada e possui um valor NULO!

valor = null; //ausência de valor.
console.log(valor);


// O nulo tem objetivo de "zerar uma variável", por indicar que essa variável está declarada
// Mas não aponta para nenhum espaço na memória.

// Exemplo agora para mostrar como null funciona,agora vamos tentar exibir o valor em binário com toString
// Obviamente vai dar erro porque a variável valor e do tipo nulo que não aponta para local nenhuma da memória.
// console.log(valor.toString()) //valor2 is not defined.
const produto = {};
console.log(produto.preco); // Aqui da undefined porque a propriedade preco do objeto produto nem existe!
console.log(produto); // Aqui funciona porque o objeto existe declarado na variável. 
// agora vai funcionar
produto.preco = 3.50;
console.log(produto);
// como vimos a cima funcionou pq o valor da chave preco foi declarado dentro do objeto produto.

 // Nunca use undefined para "declarar uma variável" , use apenas identificar
// erros no JS por exemplo.
// Mostrando o que acontece :
produto.preco=undefined;
console.log(!!produto.preco);
console.log(produto)

//A melhor forma de eliminar uma propriedade de um objeto é usando o comando delete
// Exemplo delete produto.preco;
produto.preco=null; // sem preço
console.log(!!produto.preco);
console.log(produto);



