// Javascript Assignment 1 : BanoQabil.

// Question 1

alert("Welcome to Our Website");
document.write("Question 1")

// Question 2

alert("Error! Please Enter a valid password");


// Question 3

alert("Hint : Use line break");

// Question 4

alert("Alert 1: What's your name");
alert("Alert 2: What's your email");
alert("Alert 3: What's your phone number");

// Question 5 / 6 / 7

var username;

// Question 8   

var myName  = "Taimoor Ahmed";

// Question 9

var message="Hello World";
alert(message);

// Question 10

var studentName = 'Taimoor Ahmed';
var studentAge = 26;
var studentDept= 'Electrical Engineering';
var studentGrade=' A+ ';
alert('Student Name is ' + studentName );
alert('Student Age is ' + studentAge );
alert('Department is ' + studentDept );
alert('Student Grade is' + studentGrade);

// Question 11

var email ="taimoorahmed906@gmail.com" ;

// Question 12 

alert("My email address is: "+email+"");

// Question 13

var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(str);

// Question 14

var age = 26;
alert("I am " +age + " years old");

// Question 15

var visitCount = 0;
visitCount++;
alert("You have visited this site " + visitCount + " times");
alert("You have visited this site " + visitCount + " times");


// Question 16

var birthYear = 1997;
alert("My birth year is: " + birthYear);

// Question 17

var visitorName = prompt("Enter your name here: ");
var productTitle = prompt("What do you want to buy? ");
var quantity = prompt("How much do you want to buy?");

document.write("<h1>"+visitorName+" ordered "+quantity+" "+productTitle+"(s) on XYZ Clothing Store</h1>")


// Question 18


var firstName = "John", lastName = "Doe", age = 25;

// Question 19

// Legal Variable Names:

// var1
// user_name
// total_amount
// value
// counter


// Illegal Variable Names:

// var (starts with a number)
// user name (contains a space)
// total@amount (contains a special character)
// if (a reserved keyword)
// var aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (too long and not following good naming conventions)

// Question 20

document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");

// Question 21

var num1=+prompt("Please enter first number: ")
var num2=+prompt("Please enter second number: ")
var add =  (num1+num2);
alert("The sum of addition is: " + add );

// Question 22

var subtract = (num1 - num2);
alert("The value after sub is: "  + subtract);
var multiply = (num1 * num2);
alert("The value after mult is :" + multiply);
var divide = (num1 / num2);
alert ("The value after div is :"+divide);
var modulus = (num1 % num2);
alert("The remainder after mod is :" + modulus);

// Question 23

var variable =  5;
alert("Initial Value: "+variable) ;
variable++;
alert("Value After Incrementation Is: "+variable) ;
variable +=7;
alert("Value After Adding 7 To The Variable Is: "+variable) ;
--variable;
alert("Value After Decrementation Is: "+variable) ;

if(variable%3 == 0){
    alert("The Remainder Is: 0");
    }

// Question 24

var ticketCost = 500;
var noOfTickets = 5;
var totalCost = ticketCost * noOfTickets;
alert("The cost of 5 Movie tickets is " +totalCost+ "PKR.");

// Question 25

var number = prompt("Enter a number for the multiplication table:");

number = parseInt(number);

document.write("<h2>Multiplication Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
};