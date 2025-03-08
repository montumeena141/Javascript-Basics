// Loops in JavaScript

// Basic For Loop: Prints numbers from 0 to 10
for (let loop = 0; loop <= 10; loop++) {
    console.log(loop);
}

// Print numbers from 1 to 100
for (let num = 1; num <= 100; num++) {
    console.log(num);
}

// FizzBuzz: 
// - Print "Fizz" for multiples of 3
// - Print "Buzz" for multiples of 5
// - Print "FizzBuzz" for multiples of both 3 and 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "FizzBuzz");
    } else if (i % 5 === 0) {
        console.log(i, "Buzz");
    } else if (i % 3 === 0) {
        console.log(i, "Fizz");
    } else {
        console.log(i);
    }
}

// Print sum of numbers from 1 to 10
var sum = 0;
for (var number = 1; number <= 10; number++) {
    sum += number;
}
console.log("Sum of numbers from 1 to 10:", sum);

// Increment and Decrement Operators
var i = 1;
console.log(i++); // Post-increment: prints 1, then increments i to 2
console.log(++i); // Pre-increment: increments i to 3, then prints 3

// Post-decrement and Pre-decrement
var j = 10;
console.log(j--); // Post-decrement: prints 10, then decrements j to 9
console.log(j);   // Prints 9 (updated value of j)
console.log(--j); // Pre-decrement: decrements j to 8, then prints 8

// While Loop: Print numbers from 1 to 10
var k = 1;
while (k <= 10) {
    console.log(k);
    k++;
}

// Do-While Loop: Runs at least once, then checks the condition
var x = 1;
do {
    console.log(x);
    x++;
} while (x <= 5);

// Print Even Numbers from 1 to 50
for (let even = 2; even <= 50; even += 2) {
    console.log(even);
}

// Reverse Loop: Print numbers from 10 to 1
for (let rev = 10; rev >= 1; rev--) {
    console.log(rev);
}

// Print multiplication table of 5
var table = 5;
for (let num = 1; num <= 10; num++) {
    console.log(`${table} x ${num} = ${table * num}`);
}

// Factorial of a Number using a loop
var factorial = 1;
var numFactorial = 5;
for (let i = 1; i <= numFactorial; i++) {
    factorial *= i;
}
console.log(`Factorial of ${numFactorial} is:`, factorial);
