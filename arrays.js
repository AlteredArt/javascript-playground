arrays are numbered lists with indexes
console.log("starting of arrays");
var characters = ['Luke', 'Leia', 'Han', 'Chewie'];

console.log(characters);
console.log(characters.length);
console.log(characters[characters.length-1]);

characters.push('Anakin');
console.log("push", characters);

characters.pop();
console.log("pop", characters);

characters.unshift("C3PO");
console.log("unshift", characters);

var rem = characters.shift();
console.log(rem);
characters.shift("R2D2");
console.log("shift", characters);

const pizza = 'pizza';
es5 .split("") takes a string and makes it an array
const slicedPizza = pizza.split("");
es6 using spread instead
const slicedPizza2 = [...pizza];
Array.from() creatyes an array from a string
const slicedPizza3 = Array.from(pizza);
console.log(slicedPizza, slicedPizza2, slicedPizza3)
