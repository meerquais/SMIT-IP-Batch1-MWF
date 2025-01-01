// alert("JS Connected.");


// AND Gate ---> && ===> Dono conditions true honi chahiye tabhi , result true.
// OR Gate ----> || ===>  Agar koi ek condition true ho , result true.


        // AND GATE Example!


// var age = 25;
// var hasLicense = false;


// if(age > 18 && hasLicense ){
//     console.log("You can Drive!")
// }else{
//     console.log("You can't Drive.")
// }


// OR GATE EXAMPLE


// var age = 25;
// var hasLicense = false;
// var isSunny = true;
// var hasUmbrella = false;
//         // true                 // true 
// if((isSunny || hasUmbrella) && (age > 18 && hasLicense)){
//     console.log("You can go outside.")
// }else{
//     console.log("You can't go outside.")
// }

// var age = +prompt("What is your age.");
// var hasLicense = prompt("Do you have a License");


// if(age > 18){
//     if(hasLicense == "yes" || hasLicense == "no"){
//         console.log("You can drive.!")
//     }else{
//         console.log("You need a driving License")
//     }
// }else{
//     console.log("You can't Drive.")
// }


// var fruit = "apple";
// var fruit1 = "banana";
// var fruit2 = "mango";
// var fruit3 = "Orange";
// var fruit4 = "grapes";
// var fruit5 = "pineapple";
// var fruit6 = "anaar";

// var fruits = ["apple" , "banana" , "mango" , "Orange" , "Grapes" , "mango" , "Orange" , "mango" , "Orange" , "pineapple" , "Anaar"];

// fruits.pop(); // End say value remove karta hai.
// fruits.push("Peach"); // End mein value add karta hai.
// fruits.shift(); // Start mein value add karta hai.
// fruits.unshift("Anaar"); // Start say value remove karta hai.


// updating array using index

var fruits = ["apple"];

fruits[1] = "Peach"
fruits[2] = "Mango"




console.log(fruits.length);// array ke total elements count karta hai.
console.log(fruits.indexOf("Peach")); // kisi element ka index dhoondta hai.
console.log(fruits.includes("Mango")); // check karta hai ke element array mein hai ya nahi.