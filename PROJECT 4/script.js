// Define the car object
let car = {
    brand: 'Toyota',
    model: 'Camry',
    
    // Method to display the details of the car
    displayDetails: function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
};

// Test the method
car.displayDetails();  // Output: Brand: Toyota, Model: Camry
