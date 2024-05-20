"use strict";
// Question 1
// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".
Object.defineProperty(exports, "__esModule", { value: true });
console.log(" \n\n \t Question 1 \n\n");
console.log("\n Create an array named fruits that contains the following string elements: \
\"apple\", \"banana\", \"mango\", \"orange\".\n");
let fruits = ["apple", "banana", "mango", "orange"];
console.log("fruits : ", fruits);
// Question 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.
console.log(" \n\n \t Question 2 \n\n");
console.log("\n Declare an array named numbers that can contain only number \
\ elements and initialize it with the values 10, 20, 30, and 40. \n");
let numbers = [10, 20, 30, 40];
console.log("numbers[] = ", numbers);
// Question 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.
console.log(" \n\n \t Question 3 \n\n");
console.log("\n Access the third element of the fruits array and assign it to a\
\ variable named thirdFruit.\n");
let thirdFruit = fruits[2];
console.log("fruits : ", fruits);
console.log("thirdFruit :", thirdFruit);
// Question 4
// Change the second element of the numbers array to 25.
console.log(" \n\n \t Question 4 \n\n");
numbers.splice(1, 1, 25);
console.log("numbers[] = ", numbers);
console.log("\n Change the second element of the numbers array to 25.\n ");
console.log("after changing second element: ", numbers);
// Question 5
// Add the element "grape" to the end of the fruits array using the
// method.
console.log(" \n\n \t Question 5 \n\n");
console.log("fruits [] : ", fruits);
console.log(" \n Add the element \"grape\" to the end of the fruits array \n ");
fruits.push("grapes");
console.log("fruits[] now becomes : ", fruits);
// Question 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.
console.log(" \n\n \t Question 6  \n\n");
console.log("fruits [] : ", fruits);
console.log(" \n Remove the last element from the fruits array \n ");
let lastFruit = fruits.pop();
console.log("last Fruit = ", lastFruit);
console.log("fruits [] now becomes : ", fruits);
// Question 7
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
console.log(" \n\n \t Question 7 \n\n");
console.log("fruits [] : ", fruits);
let firstFruit = fruits.shift();
console.log(" \n Remove the first element from the fruits array \n");
console.log("first Fruit : ", firstFruit);
console.log("fruit [] now becomes : ", fruits);
// Question 8
// Add the element "kiwi" to the beginning of the fruits array
// using the method.
console.log(" \n\n \t Question 8 \n\n");
console.log("fruit [] : ", fruits);
console.log("\n  Add the element \"kiwi\" to the beginning of the fruits array   \n");
fruits.unshift("kiwi");
console.log("Fruits[] now : ", fruits);
// Question 9
// Remove 2 elements from the fruits array starting from index 1
// using the method.
console.log(" \n\n \t Question 9 \n\n");
console.log("fruit [] : ", fruits);
console.log("\n Remove 2 elements from the fruits array starting from index 1 \n");
fruits.splice(1, 2);
console.log("fruits[] :", fruits);
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
console.log(" \n\n \t Question 10 \n\n");
console.log("fruit [] : ", fruits);
console.log(" \n Insert the elements \"pineapple\" and \"pear\" at index 2\n");
fruits.splice(2, 0, "pineapple", "pear");
console.log("fruits [] now becomes: ", fruits);
// Question 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.
console.log("\n\n \t question 11 \n\n");
console.log("fruit [] : ", fruits);
console.log("\n Create a new array named citrusFruits that contains the first two elements of the fruits array\n");
let citrusFruits = fruits.slice(0, 2);
console.log("citrus fruits[] :", citrusFruits);
console.log("fruits[] : ", fruits);
// Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.
console.log(" \n\n Qustion 12 \n\n");
console.log("\n Create a new array named lastTwoFruits that contains the last two elements of the fruits\n");
let lastTwoFruits = fruits.slice(fruits.length - 2);
console.log("lastTwoFruits [] : ", lastTwoFruits);
console.log("fruits [] :", fruits);
