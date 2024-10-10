// Define the existing array
let myArray = [1, 2, 3];

// Function to add any number of arguments to the existing array
function addToArray(...newElements) {
    myArray.push(...newElements);
    return myArray;
}

// Example usage:
console.log(addToArray(4, 5, 6));  // Output: [1, 2, 3, 4, 5, 6]
console.log(addToArray(7, 8));     // Output: [1, 2, 3, 4, 5, 6, 7, 8]
