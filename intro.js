const name = "Amina";
// console.log("welcome " + name);
// Declare a variable named name and initialize it with your name as a string.
// Declare a variable named age and initialize it with your age as a number.
// Declare a variable named isStudent and initialize it with a boolean value (true or false) that indicates whether you are a student.
// Declare a variable named address and initialize it as an object that includes your city and country.
// Declare a variable named hobbies and initialize it with an array of your hobbies.
// Declare a variable named undefinedVariable but do not initialize it, leaving it undefined.
// Declare a variable named nullVariable and explicitly set it to null.
// Print Variables and Their Types:

let myName = "Ovuzo"; let age = 34; let isStudent = true;
let address = {
    "City": "Ughelli",
    "Country" : "Nigeria"
}
let hobbies = ["Coding", "Swimming", "Singing", "Others"];
let undefineVariable;
let nullVariable = null;
console.log("The variable myName, is a " + typeof(myName) + " and the value of this string is " + myName )
console.log("The variable age, is a " + typeof(age) + " and the value is " + age )
console.log("The variable isStudent, is a " + typeof(isStudent) + " and the value is " + isStudent )
console.log("The variable address, is a " + typeof(address) + " and the value is " + address )
console.log("The variable hobbies, is a " + typeof(hobbies) + " and the value is " + hobbies )
console.log("The variable undefine, is a " + typeof(undefineVariable) + " and the value is " + undefineVariable )
console.log("The variable nullVariable, is a " + typeof(nullVariable) + " and the value is " + nullVariable )
console.log(address.City)


// Write a JavaScript program that prompts the user for their name and age, then calculates and alerts the year they were born. This exercise demonstrates how to interact with users and process simple data.

// Steps:
// Prompt for Name and Age:

// Use the prompt() function to ask the user for their name. Store the input in a variable named userName.
// Use prompt() again to ask for the user's age. Store this in a variable named userAge.
// Calculate Year of Birth:

// Determine the current year using new Date().getFullYear().
// Subtract userAge from the current year to calculate the year of birth. Store this in a variable named yearOfBirth.
// Display the Result:

// Use alert() to show a message to the user that includes their name and the calculated year of birth.
// prompt("Enter your Name: ");
// Write a script to check if a number is positive, negative, or 
// zero and print an appropriate message to the console.
let number = 0;
if (number > 0){
    console.log("This is a Positive number");
}
else if (number < 0){
    console.log("This is a negative number")
}else{
    console.log("This is obviously 0")
}

