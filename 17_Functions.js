// Function Examples in JavaScript

// Function Declaration
function functionName() {
    // Code inside function
  }
  
  // Function Execution (Calling the function)
  // functionName(); // This will call and execute the function
  
  // Why do we use functions?
  // - To make code reusable
  // - To perform a specific task when needed
  // - To organize the code better
  
  // Function to add two numbers
  function Addition(a, b) {
    // The function takes two parameters and prints their sum
    console.log("Sum:", a + b);
  }
  
  // Function Calls
  Addition(3, 4); // Output: 7
  Addition(4, 9); // Output: 13
  
  // Function Expression (Anonymous Function assigned to a variable)
  var a = function () {
    return "Inside A"; // Returns a string instead of printing
  };
  
  console.log(a()); // Output: Inside A
  
  // Arrow Function Syntax
  var arrowFunction = () => {
    console.log("Arrow Function");
  };
  
  // Calling the arrow function
  arrowFunction();
  
  // Homework: Find the Largest of Two Numbers
  function FindMaximum(n1, n2) {
    if (n1 > n2) {
      return "First number is Maximum: " + n1;
    } else {
      return "Second number is Maximum: " + n2;
    }
  }
  
  console.log(FindMaximum(5, 7)); // Output: Second number is Maximum: 7
  