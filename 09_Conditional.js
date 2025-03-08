// Conditionals: if, if-else, else-if

// Basic if statement
if (true) {
    console.log("if statement is true");
} else {
    console.log("if statement is false");
}

var a = 15;
var b = 7;

// Checking which number is greater
if (a > b) {
    console.log("a is greater than b");
} else if (b > a) {
    console.log("b is greater than a");
} else {
    console.log("Both numbers are equal");
}

// Grading System based on score
var score = 85;
var grade;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// Nested conditions example
if (score > 70) {
    if (score >= 90) {
        console.log("Grade A");
    } else if (score >= 80) {
        console.log("Grade B");
    } else {
        console.log("Grade C");
    }
} else {
    console.log("Grade F");
}

// Check if a number is odd or even
var number1 = 23;
if (number1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Finding the maximum of three numbers
var max1 = 15;
var max2 = 16;
var max3 = 17;

if (max1 > max2 && max1 > max3) {
    console.log(`Number ${max1} is the biggest`);
} else if (max2 > max3 && max2 > max1) {
    console.log(`Number ${max2} is the biggest`);
} else {
    console.log(`Number ${max3} is the biggest`);
}

// Alternative method using Math.max()
var maxNumber = Math.max(max1, max2, max3);
console.log(`Maximum number using Math.max() is ${maxNumber}`);

// Check if a number is positive, negative, or zero
var num = -5;
if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

// Checking Leap Year
var year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is not a Leap Year`);
}

// Using Ternary Operator (shorter if-else)
var num2 = 7;
console.log(num2 % 2 === 0 ? "Even" : "Odd");

// Checking if a number is divisible by both 5 and 10
var checkNum = 50;
if (checkNum % 5 === 0 && checkNum % 10 === 0) {
    console.log(`${checkNum} is divisible by both 5 and 10`);
} else {
    console.log(`${checkNum} is NOT divisible by both 5 and 10`);
}

// Switch case example for days of the week
var day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}
