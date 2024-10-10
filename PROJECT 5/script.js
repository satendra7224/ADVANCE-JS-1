// Define person1 and person2 objects
let person1 = {
    name: 'Alice',
    age: 25
};

let person2 = {
    name: 'Bob',
    age: 30
};

// Define the introduce function
function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Make person2 introduce itself using the introduce function with the call method
introduce.call(person2);  // Output: Hello, I'm Bob, and I'm 30 years old.
