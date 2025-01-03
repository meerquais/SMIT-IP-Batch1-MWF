// alert("Connected.");

// var fruits = [
//   "Mango",
//   "Orange",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
//   "Apple",
// ];

// fruits[3] = "Apple"
// fruits[2] = "Banana"

// fruits.pop();
// fruits.push("Strawberry");
// fruits.unshift("Grapes");
// fruits.shift()

// console.log(fruits.indexOf("Orange"));
// console.log(fruits.includes("Grapes"));


// var arr = ["red", "green" , "blue" , "black" , "yellow" , "white"];

// slice() 

// var arrCopy = arr.slice(startIndex , endIndex); 

// var arrCopy = arr.slice(2) ;

// console.log(arrCopy);
// console.log(arr)

// splice()

// var fruits = ["Apple" , "Banana" , "Mango" , "Orange"];

// startIndex : the index where changes will begin.
// deleteCount: Number of elements/value to remove. optional:0;
// items to be add.


// var removed = fruits.splice(1,2);


// var fruits = ["Apple", "Orange"];

// fruits.splice(1 , 0 , "Banana" , "Mango");
// console.log(fruits);


// var arr = [1,2,3,4,5];

// slice when u want to extract elements without changing original array.

// var sliced = arr.slice(0,3);
// console.log(sliced);


// splice when you need to add, remove or replace elements in original array.


// var spliced = arr.splice(1, 2 , "a" , "b");
// console.log(arr)


// for(initialization;condition;increment/decrement){
//     // code to run repeatedly 
// }


for(var i = 1; i <= 10; i++){
    console.log(i)
}

for(var i = 10; i > 0; i--){
    console.log(i)
}