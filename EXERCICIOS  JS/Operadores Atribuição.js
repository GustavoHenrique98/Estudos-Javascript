const a = 7; 
let b = 3;
//  Abaixo estamos usando o operador de atribuição += da variável B para variável a 
// utilizando este operador e possivel adicionar e somar  o valor de uma variável a outra.. (atribuição)
b+=a // Que é a mesma coisa de b = b+a 
console.log(b);

b -=4 // Que é a mesma coisa de  b-4 (leve em consideração que na linha 5 voce atribuiu b+a que é = 10)
//portanto vai dar 6.
console.log(b);

b *= 2 // que é a mesma coisa de atribuir o valor atual de b que é 6 a b= b*2 que vai dar 12 pois b agora vale 
// 6.
console.log(b)

b /= 2 // Que é a mesma coisa de atribuir o valor atual de b que é 12 a b = b/2 que vai dar 6
console.log(b)

b %= 2 // Que é a mesma coisa de  b = b%2 (resto da divisão o módulo significa isso)
console.log(b)
//Basicamente o sinal de += é uma maneira mais rápida de adicionar um valor em uma varíavel numérica.

