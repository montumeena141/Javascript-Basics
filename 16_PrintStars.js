// Various Pattern Programs in JavaScript

// Right-angled Triangle
// This pattern prints a right-angled triangle using '*'
var r;
for (var i = 1; i <= 5; i++) {
    r = " ";
    for (var j = 1; j <= i; j++) {
        r = r + " *";
    }
    console.log(r);
}

// Reverse Triangle
// This pattern prints an inverted right-angled triangle
console.log("Reverse");
for (var i = 5; i >= 1; i--) {
    var star = ' ';
    for (var j = 1; j <= i; j++) {
        star = star + '* ';
    }
    console.log(star);
}

// Triangle
// This pattern prints a symmetrical triangle with '*' 
console.log("Triangle");
for (var i = 1; i <= 5; i++) {
    var pattern = "";
    for (var j = 1; j <= 5 - i; j++) {
        pattern += " "; // Adding spaces to align stars in the center
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }
    console.log(pattern);
}

// Diamond
// This pattern prints a diamond shape using '*'
console.log("Diamond");
for (var i = 1; i <= 5; i++) {
    var output = '';
    for (var j = 1; j <= 5 - i; j++) {
        output += ' ';
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        output += '*';
    }
    console.log(output);
}
for (var i = 4; i >= 1; i--) {
    var output = '';
    for (var j = 1; j <= 5 - i; j++) {
        output += ' ';
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        output += '*';
    }
    console.log(output);
}

// Pyramid
// This pattern prints a centered pyramid using '*'
console.log("Pyramid");
for (var i = 1; i <= 5; i++) {
    var pattern = "";
    for (var j = 5; j >= i + 1; j--) {
        pattern += " "; // Adding spaces for alignment
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }
    console.log(pattern);
}

// Left-aligned Triangle
// This pattern prints a left-aligned triangle
for (var i = 1; i <=5; i++) {
    var pattern = "";
    for (var j = 4; j >= i-1; j--) {
      pattern += " "; // Adding spaces
    }
    for (var k = 1; k <= i; k++) {
      pattern += "*";
    }
    console.log(pattern);
}

// Numeric Patterns
// This pattern prints numbers in an increasing order
console.log("Numeric Pattern 1");
for (var i = 1; i <= 5; i++) {
    r = "";
    for (var j = 1; j <= i; j++) {
        r = r + j;
    }
    console.log(r);
}

// This pattern prints repeated numbers for each row
console.log("Numeric Pattern 2");
for (var i = 1; i <= 5; i++) {
    r = "";
    for (var j = 1; j <= i; j++) {
        r = r + i;
    }
    console.log(r);
    
}
