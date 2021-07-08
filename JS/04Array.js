// reconciliation javascript
// indexOf
// splice
// slice

let fruits = ['Apple','Banana'];
console.log(fruits.length);

let first = fruits[0];
console.log(first);

let last = fruits[fruits.length - 1];
console.log(last);

////loop an array
fruits.forEach(function(item,index,array){
    console.log(item,index,array);
});

//add item to array
fruits.push('Orange');
fruits.push('Mango');
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

//shift and unshift
fruits.shift();
console.log(fruits);
fruits.unshift('Strawberry'); //add element to the begining
console.log(fruits);

//indexOf
let pos = fruits.indexOf('Banana');
console.log(pos);

//remove an item by index position
let removeItem = fruits.splice(pos,1);
console.log(removeItem);

//////
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);

let removedItem = vegetables.slice(1,2);
console.log(removedItem);
console.log(vegetables);

///////////filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const res = words.filter(word => word.length>6);
console.log(res);