// Import the readline-sync module to read user input easily in a loop
// Note: We will install this package in the terminal in the next step!
const readline = require('readline-sync');

// Array to store the integers entered by the user
let numbers = [];
let keepGoing = true;

console.log("Welcome to the Data Analytics Program!");
console.log("Enter integers one by one. Enter 'q' or 'Q' when you are finished.");
console.log("-----------------------------------------------------------------");

// Loop to continuously ask the user for input until they quit
while (keepGoing) {
    let input = readline.question("Enter an integer (or 'q' to quit): ");
    
    // Trim whitespace from the input
    let trimmedInput = input.trim();

    // Check if the user wants to quit
    if (trimmedInput.toLowerCase() === 'q') {
        keepGoing = false;
    } 
    // Error Handling: Check if the input is empty or not a valid number
    else if (trimmedInput === "" || isNaN(trimmedInput)) {
        console.log("❌ Error: Invalid input. Please enter a whole integer or 'q'.");
    } 
    // Error Handling: Ensure it's a whole integer, not a decimal
    else if (parseFloat(trimmedInput) !== parseInt(trimmedInput)) {
        console.log("❌ Error: Decimals are not allowed. Please enter a whole integer.");
    } 
    // If it passes all checks, it's a valid integer
    else {
        let validInteger = parseInt(trimmedInput);
        numbers.push(validInteger);
    }
}

// Check if the user actually entered any numbers before doing math
if (numbers.length === 0) {
    console.log("\nNo numbers were entered. Program ending.");
} else {
    // ---- CALCULATIONS ----

    // 1. Count
    let count = numbers.length;

    // Sort the array in ascending order (needed for Min, Max, and Median)
    numbers.sort(function(a, b) { 
        return a - b; 
    });

    // 2. Minimum and Maximum (Since the array is sorted, Min is first and Max is last)
    let min = numbers[0];
    let max = numbers[numbers.length - 1];

    // 3. Mean (Average) using a standard for-loop
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let mean = sum / count;

    // 4. Median
    let median = 0;
    let middleIndex = Math.floor(count / 2);

    if (count % 2 !== 0) {
        // If the total count is odd, pick the exact middle number
        median = numbers[middleIndex];
    } else {
        // If the total count is even, average the two middle numbers
        median = (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
    }

    // ---- DISPLAY RESULTS ----
    console.log("\n============= RESULTS =============");
    console.log("Count (Total Numbers): " + count);
    console.log("Minimum Value:         " + min);
    console.log("Maximum Value:         " + max);
    console.log("Mean (Average):        " + mean.toFixed(2));
    console.log("Median:                " + median);
    console.log("===================================\n");
}