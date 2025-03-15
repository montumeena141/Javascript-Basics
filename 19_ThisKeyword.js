const person = {
    name: "Montu",
    age: 25,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  person.greet(); 
  // ✅ Output: Hello, my name is Montu and I am 25 years old.
  