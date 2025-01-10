// alert("Connected.")


// var num = [10 , 15 , 22 , 33 , 43];

// for(var i = 0; i < num.length; i++){

//     if(num[i] % 2 === 0){
//         console.log(num[i] + " is even.");
//     }else{
//         console.log(num[1] + " is odd")
//     }

// }

// var num = [10 , 20 , 30 , 40 , 50];
// var target = 70;
// var isFound = false;

// for(var i = 0; i < num.length; i++){
//     if(num[i] === target){
//         isFound = true;
//         break;
//     }
// }

// if(isFound){
//     console.log("target found in the array.");
// }else{
//     console.log("target not found in the array.");
    
// }


// var nums = [1 , 3 , 5 , 7 , 10 , 11];
// var hasEven = false;

// for(var i = 0; i < nums.length; i++){

//     if(nums[i] % 2 === 0){
//         hasEven = true;
//         break;
//     }
// }

// if(hasEven){
//     console.log("Array has at least one even number")
// }else{
//     console.log("Array has no even numbers.");
    
// }


// var matrix = [
//     [1 , 2 , 3],
//     [4 , 5 , 6],
//     [7 , 8 , 1]
// ];
// var hasDuplicate = false;

// for(var i = 0; i < matrix.length; i++){

//     for(var j = 0; j < matrix[i].length; j++){

//         for(var k = j; k < matrix[i].length; k++ ){

//             if(matrix[i][j] === matrix[i][k]){
//                 hasDuplicate = true;
//                 break;
//             }
//         }

//         if(hasDuplicate){
//             break;
//         }
//     }
//     if(hasDuplicate){
//         break;
//     }


// }

// if(hasDuplicate){
//     console.log("duplicate found in the matrix");
// }else{
//     console.log("duplicate not found in the matrix");
    
// }


// var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls",
//     "great falls", "Honolulu", "honolulu"];


var cleanestCities = ["KARACHI", "LAHORE", "ISLAMABAD", "PESHAWAR", "MULTAN"];
var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toUpperCase();
var isMatch = false;
 for (var i = 0; i < cleanestCities.length; i++) {
 if (cityToCheck === cleanestCities[i]) {
  isMatch = true;
  break;
 }
 }





 
 if(isMatch){
    alert("It's one of the cleanest cities");
 }else{
 alert("It's not one of the cleanest cities");
 }




    