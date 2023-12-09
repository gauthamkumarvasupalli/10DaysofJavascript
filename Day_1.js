// Day 1 is all about the basics in java script.

/* 
 Topics covered Today: 
     1.History
     2.Variables
     3.Data types
*/  

// 1. History of JavaScript

/* 
 Javascript is developed by following the Echma script which is nothing but a set of rules/ Protocols and stable version of JS is using ES6. 
 
 V8 and Spider Monkey are some of the famous interpreters used for executing JS programs in Google and Firefox respectively.
 */


//2.Variables

 /* 
 A variable is a named container for holding values, and its value can be changed during the execution of a program. 

 Variables in JavaScript are loosely typed, meaning they can hold values of any data type, and the type of a variable can change dynamically.
 */

 // Using let for block-scoped variables (camelCase)
let firstName = "John";
let lastName = "Doe";
let age = 25;
let isStudent = false;

// Displaying values using variables
console.log("Name: " + firstName + " " + lastName); // Concatenation of two strings
console.log("Age: " + age);
console.log("Is a student? " + isStudent);

// Updating variable values
age = 26;
isStudent = true;

// Displaying updated values
console.log("Updated Age: " + age);
console.log("Updated student status: " + isStudent);

// Using var, it will have global scope
var globalScope="first";
let localScope="first"

{
    globalScope="Second";
    localScope="Second"
}

console.log("global:"+globalScope)
console.log("Local:"+ localScope)

// Note: The use of var is not recommended for modern JavaScript; use let and const instead.


//Demonstrating different naming conventions

let jobTitle = "jobTitle";   
console.log("Using camelCase: " + jobTitle);


// Using CONSTANT 

const MAX_AGE = 100;
console.log("Using Const and underScore:Max_Age= " +MAX_AGE);

// Using $ in variable names (camelCase)
let $specialVariable = "I have a $ sign";
console.log($specialVariable);



//3. Data Types

/*
There are two types of Data types in Java Script.
*/

// 1. Primitive Data Types
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("unique"); // Symbol

console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Null:", nul);
console.log("Symbol:", sym);

// 2. Reference Types
let arr = [1, 2, 3]; // Array
let obj = { key: "value", age: 25 }; // Object
let func = function () {
  console.log("I am a function!");
}; // Function

console.log("Array:", arr);
console.log("Object:", obj);
console.log("Function:", func);
