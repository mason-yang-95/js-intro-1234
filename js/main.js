//Assigning 0 to place in meemory
let myBankBalance = 0

myBankBalance = myBankBalance + 50 // 0 + 50 = 50
myBankBalance = myBankBalance + 100 // 50 + 100 = 150
myBankBalance = myBankBalance + 25 // 150 + 25 = 175

console.log("Your balance is: " + myBankBalance)
console.log('Your balance is: ' + myBankBalance)
console.log(`Your balance is: ${myBankBalance}`)

//Variable

//EXERCISE 1: The Fortune Teller

let jobtitle = 'Rapper'
let myFutureCity  = 'New York'
let annualSalary = '500,000'
let companyname = 'Rock Nation'

// console.log("You will be a X in Y, making $N for Z.")
console.log(`You will be a ${jobtitle} in ${myFutureCity}, making ($${annualSalary} per month) for ${companyname}.`)


//EXERCISE 2: The Age Calculator

let current = '2020';
let birth = '1995';
let someoneage = (current - birth);

console.log(`They are ${someoneage} years old.`)


//EXERCISE 3: The Lifetime Supply Calculator

let age = '80';
let per = '2';
let beverage = 'Iced Latte';

console.log(`You will need ${per} ${beverage} to last you until the ripe old age of ${age}`)


//EXERCISE 4: The Geometrizer

let radius = "4";
let circumference = Math.PI * 2 * radius;
let area = Math.PI * radius * radius;

console.log(`The circumference is ${circumference}`)
console.log(`The area is ${area}`)


//EXERCISE 5: The Temperature Converter

let celsius = 26;
let celsiusnf = (celsius * 9)/ 5 + 32;
let total1 = celsiusnf;
let fahrenheit = 18;
let fahrenheitnf = ((fahrenheit - 32) * 5)/ 9;
let total2 = fahrenheitnf;

console.log(`${celsius}°C is ${total1}°F.`)
console.log(`${fahrenheit}°F is ${total2}°C.`)

//Function

// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."

let number0 = 3;
function squareNumber(number) {
    return number * number;
 }

console.log(`The result of squaring the number ${number0} is ${squareNumber(3)}`)


// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. 
// It should also log a string like "Half of 5 is 2.5.".

let number1 = 5;
function halfNumber(number) {
    return number / 2;
 }

console.log(`Half of ${number1} is ${halfNumber(5)}.`)


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. 
// It should also log a string like "2 is 50% of 4."

let number2 = 2;
let number3 = 4;
function percentOf(a, b) {
    return (a / b) * 100;
 }

console.log(`${number2} is ${percentOf(2,4)}% of ${number3}.`)


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. 
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

let number4 = 2;
function areaOfCircle(a) {
    let area = Math.PI * squareNumber(a);
    return area; 
}

console.log(`The area for a circle with radius ${number4} is ${areaOfCircle(2)}.`);



// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
let num1 = 4;
function halfNumber(number) {
    return number / 2;
 }

console.log(`Half of ${num1} is ${halfNumber(4)}.`)

//      2. Square the result of #1 and store that result. 
let num2 = 2;
function squareNumber(number) {
    return number * number;
 }

console.log(`The result of squaring the number ${num2} is ${squareNumber(2)}`)


//      3. Calculate the area of a circle with the result of #2 as the radius.   
let num3 = 4;
function areaOfCircle(a) {
    let area = Math.PI * squareNumber(a);
    return area; 
}

console.log(`The area for a circle with radius ${num3} is ${areaOfCircle(4)}.`);


//      4. Calculate what percentage that area (#3) is of the squared result (#2).
let num4 = 4;
let num5 = 50.27;
function percentOf(a, b) {
    return (a / b) * 100;
 }

console.log(`${num4} is ${percentOf(4,50.27)}% of ${num5}.`)

