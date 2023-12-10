/*
Topics learnt in Day - 2
1.Functions
2.Conditions
3.Math Functions
4.Array Methods



// Function example
function greet(name) {
  return "Hello, " + name + "!";
}

let personName = "Alice";
console.log(greet(personName));

// Conditions example
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Math functions and parseFloat example
let floatNumber = parseFloat("3.14");
console.log("Parsed Float:", floatNumber);

let roundedNumber = Math.round(floatNumber);
console.log("Rounded Number:", roundedNumber);

let ceiledNumber = Math.ceil(floatNumber);
console.log("Ceiled Number:", ceiledNumber);

let flooredNumber = Math.floor(floatNumber);
console.log("Floored Number:", flooredNumber);

// Array methods example
let originalArray = [1, 2, 3];
console.log("Original Array:", originalArray);

// Pushing elements to the end of the array
originalArray.push(4, 5);
console.log("Array after push:", originalArray);

// Unshifting elements to the beginning of the array
originalArray.unshift(0);
console.log("Array after unshift:", originalArray);

// Concatenating arrays
let newArray = originalArray.concat([6, 7, 8]);
console.log("Concatenated Array:", newArray);
