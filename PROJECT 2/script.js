// Create a Map to store contact information
let contacts = new Map();

// Add contact details to the Map
contacts.set('John Doe', { age: 30, email: 'john.doe@example.com', location: 'New York' });
contacts.set('Jane Smith', { age: 25, email: 'jane.smith@example.com', location: 'Los Angeles' });
contacts.set('Bob Johnson', { age: 40, email: 'bob.johnson@example.com', location: 'Chicago' });

// Function to retrieve contact details by name
function getContactDetails(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return `Contact with the name "${name}" not found.`;
    }
}

// Example usage:
console.log(getContactDetails('John Doe'));
// Output: { age: 30, email: 'john.doe@example.com', location: 'New York' }

console.log(getContactDetails('Alice Brown'));
// Output: Contact with the name "Alice Brown" not found.
