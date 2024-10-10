// 1. Create a Map
let myMap = new Map();

// 2. Add key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('occupation', 'Engineer');

// 3. Check if a specific key exists
if (myMap.has('name')) {
    console.log("Key 'name' exists in the Map");
} else {
    console.log("Key 'name' does not exist in the Map");
}

// 4. Retrieve the value associated with a given key
let occupation = myMap.get('occupation');
console.log("Occupation:", occupation); // Output: Engineer

// 5. Iterate through all key-value pairs
myMap.forEach((value, key) => {
    console.log(key + ": " + value);
});
