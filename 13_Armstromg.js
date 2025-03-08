// Function to check if a number is an Armstrong number
function isArmstrong(num) {
    var numberofDigits = num.toString().length; // Counting number of digits dynamically
    var sum = 0;
    var temp = num; // Store original number to modify in loop

    // Loop through each digit using a for loop
    for (var i = 0; i < numberofDigits; i++) {
        sum += Math.pow(temp % 10, numberofDigits); // Extract last digit and raise to power of digit count
        temp = Math.floor(temp / 10); // Remove last digit
    }

    // Check if the sum is equal to the original number
    return sum === num;
}

// Testing with a number
var num = 153; // Example Armstrong number
if (isArmstrong(num)) {
    console.log(num, "is an Armstrong number");
} else {
    console.log(num, "is not an Armstrong number");
}

// Another approach using while loop
function isArmstrongUsingWhile(num) {
    var numberofDigits = num.toString().length;
    var sum = 0;
    var temp = num;

    // While loop approach
    while (temp !== 0) {
        sum += Math.pow(temp % 10, numberofDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

// Testing the while loop approach
if (isArmstrongUsingWhile(num)) {
    console.log(num, "is an Armstrong number (checked using while loop)");
} else {
    console.log(num, "is not an Armstrong number (checked using while loop)");
}

// Bonus: Checking all Armstrong numbers in a given range (1 to 1000)
console.log("Armstrong numbers between 1 and 1000:");
for (var i = 1; i <= 1000; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}
