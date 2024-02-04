// // Javascript Assignment 2 : BanoQabil.

// Question 1

var initValue = +prompt("Assign a Number to variable ' a ' !");

document.write("<h1> Result: </h1>" + "<br />");
document.write("The value of a is: " + initValue  + "<br />");

document.write("<b>.........................................</b>" + "<br /> <br />");

document.write("The value of ++a is: " + ++initValue + "<br />");
document.write("Now the Value of a is: " + initValue + "<br /> <br />");

document.write("The Value of a++ is: " + initValue++ + "<br />");
document.write("Now the Value of a is: " + initValue + "<br /> <br />");

document.write("The Value of --a is: " + --initValue + "<br />");
document.write("Now the Value of a is: " + initValue + "<br /> <br />");

document.write("The Value of a-- is: " + initValue-- + "<br />");
document.write("Now the Value of a is: " + initValue);


// Question 2

// What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--; 


var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
           //  1 -   0 +   1 + 1   

console.log(result);


// Question 3

// Write a program that takes input a name from user & greet the user

var userName = prompt("Enter Your Name: ");
alert("Hello, " + userName);


// Question 4

// Write a program to take input a number from user & display its multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 

var tableOf = +prompt("Enter a number to print the table of: ", 5);

for(var i = 1; i <= 10; i++){
    document.write(tableOf + " x " + i + " = " + tableOf * i + "<br />")
}


// Question 5
// Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser. (Hint: user table) 


var subject1 = prompt("Enter your first subject Name:").toUpperCase();
var subject2 = prompt ("Enter your second subject Name: ").toUpperCase();
var subject3 = prompt ("Enter your third subjcet Name: ").toUpperCase();

var subj1Marks = +prompt("Enter your " + subject1 + " obtained marks: ")
var subj2Marks = +prompt("Enter your " + subject2 + " obtained marks: ")
var subj3Marks = +prompt("Enter your " + subject3 + " obtained marks: ")

var totalMarks = 100;
var totalObtainedMarks = subj1Marks + subj2Marks + subj3Marks;

var result = (totalObtainedMarks / (totalMarks*3) * 100);

document.write("<h1>Result:</h1>")

document.write(`<table border='2'>
 <tr> <th> Subject </th> <th> Total Marks </th> <th> Obtained marks </th> <th> Percentage </th> </tr>
 <tr> <td>${subject1}</td> <td>${totalMarks}</td> <td>${subj1Marks}</td> <td>${subj1Marks/totalMarks*100}%</td> </tr>
 <tr> <td>${subject2}</td> <td>${totalMarks}</td> <td>${subj2Marks}</td> <td>${subj2Marks/totalMarks*100}%</td> </tr>
 <tr> <td>${subject3}</td> <td>${totalMarks}</td> <td>${subj3Marks}</td> <td>${subj3Marks/totalMarks*100}%</td> </tr>
 <tr> <th>Total</th> <th>${totalMarks*3}</th> <th>${totalObtainedMarks}</th> <th>${result}%</th> </tr>
 </table>`)