// alert("Connected.")


var age = 28;


// if(age < 20){
//     alert("Allowed.")
// }else{
//     alert("Not Allowed.")
// }

// if(age < 20){
//     alert("Allowed.");
// }else if(age < 25){
//     alert("Still Allowed.")
// }else if(age < 30){
//     alert("still allowed.")
// }else{
//     alert("Not Allowed.")
// }


// === Strict Equality , checks type and value.
// == Equality  , Check value.
// = assigning operator.

// !== Strict unEquality , check type and value. 
// != unEquality , check value.

// var a = "11"; 

// var result = a != 11;

// console.log(result)



// < ----> Less than , check if the value is lesser or not.
// <= ---> Less than equal to , check if the value is lesser or equal to it.

// var number = 10;

// var result = number <= 10;

// console.log(result)

// > ----> greater than , check if the value is greater or not.
// >= ---> greater than equal to , check if the value is greater or equal to it.




var num1 = +prompt("type the first number");
var opt = prompt("Type your operator. '+/-/*/' ");
var num2 = +prompt("Type your second number.");
var result;

if(opt === "+"){
   var result = num1 + num2;
}else if(opt === "-" ){
    var result = num1 -num2;
}else if(opt === "*"){
    var result = num1 * num2;
}else if(opt === "/"){
    var result = num1 / num2;
}else{
    alert("Error")
}

alert("Result is : " + result)