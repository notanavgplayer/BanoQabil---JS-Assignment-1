// Javascript Assignment 3 : BanoQabil.

// Question No 1

let city =  prompt("Enter here City Name");
if ( city === "Karachi" ){
    alert("Welcone to the city of light");
} else if (city === "Lahore"){
    alert("Welcone to Lahore");
} else if (city === "Islamabad"){
    alert("Welcome to the Capital city ");
} else {
    alert("Welcome to the Pakistan");
}

// Question No 2  

let gender = prompt("Please Your Gender");
if (gender === "Male") {
    alert("Good Morning Sir");
} else if (gender === "Female"){
    alert("Good Morning Ma'am");
} else {
    alert("Good Morning to all ");
}

// Question No 3 

let fuel = prompt("Check Fuel in Your Car");
if (fuel <= "0.25 liter"){
    message = "Please rifil the fuel in your car";
    alert(message);
} else {
    message = "Fuel level up";
    alert (message);
}

// Question No 4 

 let a = 4;
 if (++a === 5){
    alert("Given condition for variable a is true");
 }   
let b = 82;
if (b++ === 83){
    alert("Given condition for variable b is true");
}  
let c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if(c === 13){
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
} if(c === 14){
    alert("condition 4 is true");
}   
let materialCost = 20000; 
let laborCost = 2000; 
let totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}   
if (true) {
    alert("True");
} if (false) {
    alert("False");
}  
if ("car" < "cat") {
    alert("car is smaller than cat");
}  

 
// Question No 5  
let secretNumber = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let userGuess = prompt("Enter a Secret Number");
if (userGuess <= secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess == secretNumber +1) {
    alert("Close enough to the correct answer");
} else {
    alert("Enter a correct number");
}

// Question No 6  

let num = prompt("Enter a Number");
if (num % 3 === 0 ){
    console.log(num , "is divided by 3");
} else {
    console.log(num , "is not divided by 3");
}

// Question No 7   

let num = prompt("Enter a Number");
if (num %2 === 0){
    console.log(num,"is Even");
} else {
    console.log(num,"is Odd");
}

// Question No 8

let temperature = prompt("Enter current City Temperature");
if (temperature >= 40){
    alert(" It is too Hot outside.");
} else if (temperature >=30){
alert("The Weather today is Normal");
} else if (temperature >=20){
    alert(" Today's Weather is cool");
} else if (temperature >=10){
    alert("OMG! Today's Weather is so cool");
} else {
    alert("Enter Temperature");
}

// Question No 9 

let num1 = parseInt(prompt("Enter Number One"));
let operator = prompt("Enter the Operator(+ , - , * , / , % ,):");
let num2 = parseInt(prompt("Enter Number Two"));
let result ; 
if (operator == "+"){
    console.log("Your Result is :" , result = num1 + num2);
} else if (operator == "-"){
    console.log("Your Result is :" , result = num1 - num2);
} else if (operator == "*"){
    console.log("Your Result is :" , result = num1 * num2);
} else if (operator == "/"){
    console.log("Your Result is :" , result = num1 / num2);
} else if (operator == "%"){
    console.log("Your Result is :" , result = num1 % num2);
} else {
    alert("Enter correct Number");
} 