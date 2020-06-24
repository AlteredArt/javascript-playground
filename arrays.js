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
//es5 .split("") takes a string and makes it an array
const slicedPizza = pizza.split("");
//es6 using spread instead
const slicedPizza2 = [...pizza];
//Array.from() creatyes an array from a string
const slicedPizza3 = Array.from(pizza);
console.log(slicedPizza, slicedPizza2, slicedPizza3)

let twoD = [[1,2,3,4,5,6,7],
            [8, 10, 5 ,7, 3, 22, 6, 42],
            [123, 54, 12, 11, 9, 15]];

            let rows = twoD.length;
            for(let i=0; i<rows; i++){
              let items =twoD[i].length;
              console.log(i, items)
              for(let t=0; t<items; t++){
                  console.log( twoD[i][t]);
              }
            }

for each loop, convert all the names to lower case besides thorin
let dwarves = ["Bifur", "Bofur", "Bombur", "Fifi", "kildi", "oin", "Glorin", "Thorin", "Balin", "Dwalin", "Nori", "Dori"];

dwarves.forEach(function(item, index, array){
if( item === "Thorin"){
  item= item.toUpperCase();
}else{
  item= item.toLowerCase();
}
  console.log(index, item);
})

sorting items in an array
var fruits = ["Bannana", "Orange", "Apple", "Mango"]
console.log(fruits.sort());
