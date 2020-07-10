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

// for each loop, convert all the names to lower case besides thorin
let dwarves = ["Bifur", "Bofur", "Bombur", "Fifi", "kildi", "oin", "Glorin", "Thorin", "Balin", "Dwalin", "Nori", "Dori"];

dwarves.forEach(function(item, index, array){
if( item === "Thorin"){
  item= item.toUpperCase();
}else{
  item= item.toLowerCase();
}
  console.log(index, item);
})

// sorting items in an array
var fruits = ["Bannana", "Orange", "Apple", "Mango"]
console.log(fruits.sort());


// creating an array
class MyArray {
  constructor(){
    this.length = 0;
    this.data ={};
  }
  get(index) {
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  //shifting the items to the left by one
  shiftItems(index){
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1]
    }
    this.data[this.length-1]
  }
}

const newArray = new MyArray();
newArray.push("hi")
newArray.push("you")
newArray.push('!')
newArray.pop();
newArray.pop();
console.log(newArray)

//reverse a string
function reverse(str){
  if (!str || str.length < 2 || typeof str !== "string"){
    return 'Hmm thats not good';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
console.log(backwards);
  return backwards.join('')
}

reverse("hi my name is waffles")

//simpler syntax
function reverse2(str) {
  return str.split('').reverse().join('')
}

console.log(reverse2('you are a punk'))

//es6 syntax
const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3('es6 syntax'))

//using the spread operator
const reverse4 = str => [...str].reverse().join('');
console.log(reverse4('es6 syntax'))


//merge two sorted array
function mergeSortedArray(arr1, arr2){
  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let n = 1;
  //check input
  if (arr1.length === 0) {
    return arr2;
  }
  if(arr2 === 0){
    return arr1;
  }
  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = arr1[i];
      i++
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[n]
      n++
    }
  }
  return mergedArray;
}
console.log(mergeSortedArray([0,3,4,31], [4,6,30]));

//arrays continued
let selectedColors = ["red", 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.includes('red'));
