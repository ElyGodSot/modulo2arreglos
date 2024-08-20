
let numeroalazar=[];


numeroalazar.push(12);
numeroalazar.push(2);
numeroalazar.push(212);
numeroalazar.push(32);
numeroalazar.push(762);
numeroalazar.push(1);
numeroalazar.push(22);
numeroalazar.push(123);
numeroalazar.push(7);
numeroalazar.push(9);

console.log(numeroalazar);
let cadena=prompt("escribe una serie de datos separados por coma");
let resultado = cadena.split(",");
console.log(resultado);

let numeros= [10, 40, 30, 20, 15, 5];
let numerosordenados=numeros.slice().sort((a,b)=> a-b);
console.log(numerosordenados);

console.log("Numero menor"+Math.min(...numeros));
console.log("Numero mayor"+Math.max(...numeros));

