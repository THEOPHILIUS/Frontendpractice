//Define a variable with a string value
let myName = "Kehinde";

//length of the string
console.log("Length of the string:", myName.length);

//touppercase
console.log("Uppercase:", myName.toUpperCase());

//tolowercase
console.log("Lowercase:", myName.toLowerCase());

//charAt
console.log("Character at position 3:", myName.charAt(2));

//substring method
console.log("Substring from index 1 to 3:", myName.substring(1, 7));

//updated string
let updatedString = myName.replace("d", "i");
console.log("Updated string:", updatedString);

//indexOf method
let position = myName.indexOf("e");
console.log("Position of 'e':", position);

//Concatenate
let greeting = "Hello, ";
let combinedResult = greeting.concat(myName);
console.log("Combined result:", combinedResult);

//Use a comparison operator to check if the length is greater than a value
let isLengthGreaterThanSeven = myName.length > 7;
console.log("Is the length greater than 7?", isLengthGreaterThanSeven);
