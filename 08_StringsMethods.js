// 🔹 String Properties & Methods

var str = "Hello JavaScript";

// ✅ 1. length -> Returns the number of characters in a string
console.log(str.length); // Output: 17

// ✅ 2. toUpperCase() / toLowerCase() -> Changes case of string
console.log(str.toUpperCase()); // Output: "HELLO JAVASCRIPT"
console.log(str.toLowerCase()); // Output: "hello javascript"

// ✅ 3. charAt(index) -> Returns character at a specific position
console.log(str.charAt(6)); // Output: "J"

// ✅ 4. substring(start, end) -> Extracts part of the string
console.log(str.substring(6, 16)); // Output: "JavaScript" (end index is excluded)

// ✅ 5. slice(start, end) -> Similar to substring but supports negative index
console.log(str.slice(-10, -1)); // Output: "avaScrip"

// ✅ 6. indexOf("substring") -> Finds the first occurrence of a substring
console.log(str.indexOf("Java")); // Output: 6 (Index where "Java" starts)
console.log(str.indexOf("Python")); // Output: -1 (Not found)

// ✅ 7. lastIndexOf("substring") -> Finds the last occurrence of a substring
var str2 = "Hello JavaScript, JavaScript is fun!";
console.log(str2.lastIndexOf("JavaScript")); // Output: 18

// ✅ 8. includes("substring") -> Returns true if the string contains a substring
console.log(str.includes("Script")); // Output: true
console.log(str.includes("Python")); // Output: false

// ✅ 9. startsWith("substring") -> Checks if a string starts with a substring
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("Java")); // Output: false

// ✅ 10. endsWith("substring") -> Checks if a string ends with a substring
console.log(str.endsWith("JavaScript")); // Output: true
console.log(str.endsWith("Hello")); // Output: false

// ✅ 11. replace("old", "new") -> Replaces the first occurrence of a substring
console.log(str.replace("JavaScript", "JS")); // Output: "Hello JS"

// ✅ 12. replaceAll("old", "new") -> Replaces all occurrences of a substring
var sentence = "JS is great. JS is powerful!";
console.log(sentence.replaceAll("JS", "JavaScript")); 
// Output: "JavaScript is great. JavaScript is powerful!"

// ✅ 13. trim() -> Removes whitespace from both sides of the string
var text = "   Trim this!   ";
console.log(text.trim()); // Output: "Trim this!"

// ✅ 14. trimStart() / trimEnd() -> Removes whitespace from start or end
console.log(text.trimStart()); // "Trim this!   "
console.log(text.trimEnd()); // "   Trim this!"

// ✅ 15. split("separator") -> Converts a string into an array
var csv = "apple,banana,grape";
console.log(csv.split(",")); // Output: ["apple", "banana", "grape"]

// ✅ 16. repeat(n) -> Repeats the string n times
console.log("Hi! ".repeat(3)); // Output: "Hi! Hi! Hi! "

// ✅ 17. concat() -> Combines multiple strings
var firstName = "Montu";
var lastName = "Meena";
console.log(firstName.concat(" ", lastName)); // Output: "Montu Meena"

// ✅ 18. padStart(length, "char") -> Pads string at the beginning
var numStr = "5";
console.log(numStr.padStart(4, "0")); // Output: "0005"

// ✅ 19. padEnd(length, "char") -> Pads string at the end
console.log(numStr.padEnd(4, "0")); // Output: "5000"

// ✅ 20. match(regex) -> Returns matches of a pattern
var sentence2 = "JavaScript is amazing. I love JavaScript!";
console.log(sentence2.match(/JavaScript/g)); // Output: ["JavaScript", "JavaScript"]
