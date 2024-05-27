"use strict";
// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
let people = { friends: [] };
// 2. Create three separate objects, each representing a friend, with properties like firstName, lastName, 
// and optionally id.
let friend1 = { firstName: "sadia",
    lastName: " Fatima",
    id: 100100
};
let friend2 = { firstName: "MaharBano",
    lastName: " Fatima",
    id: 100200
};
let friend3 = { firstName: "Sahar",
    lastName: " Fatima",
};
// // 3. Add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
// // 4. Output the entire people object to the console, displaying your information and your friend list.
console.log("\n\n\t Asignment 1 \n\n");
console.log(people);
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like: const scrambledArray = ["student", "of",true, 123,
//  "am", "a", "GIAIC", "I"];
let scrambledArray = [123, 'student', 'of', true, 'a', 'GIAIC', false];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
scrambledArray.pop(); //pop removes last element
scrambledArray.shift(); //  removes first element
scrambledArray.push("am"); //push
scrambledArray.unshift("I") //unshift
; //
scrambledArray.splice(3, 1); // splice removes boolean in middle
console.log("\n\n\t Asignment 2 \n\n");
console.log("ScrambledArray :", scrambledArray); // note the index number of strings
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
//  scrambledArray.split(" ," )
// o Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
let newarray = [scrambledArray[0], scrambledArray[5], scrambledArray[3],
    scrambledArray[1], scrambledArray[2], scrambledArray[4]];
console.log("ReshaffledArray : ", newarray);
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
console.log(`String : \"${newarray.toString().replace(/,/g, " ")}\"`); // tostrind converts elements of array into string and 
//replace will replace all "," into blank space
// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
let inventory = [];
let product1 = { name: "Honda 125", model: 2023, cost: 250000, quantity: 10 };
let product2 = { name: "Honda 150", model: 2020, cost: 275000, quantity: 5 };
let product3 = { name: "Honda CD70", model: 2024, cost: 150000, quantity: 15 };
// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1, product2, product3);
// 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log("\n\n\t Asignment 3 \n\n");
console.log(`\n Product name : ${inventory[2].name},Quantity : ${inventory[2].quantity} \n`);
// 5. Explore adding and accessing more elements within the inventory array to understand how to manage product data.
let product4 = { name: "Yamaha 125", model: 2024, cost: 225000, quantity: 15, color: "red" };
inventory.push(product4); // adding more elements
inventory[0].cost = inventory[0].cost * 1.5; // changing the value
console.log("Product details : ", inventory[0]);
console.log("Product name :", inventory[3].name, "color : ", inventory[3].color); //accesing optional property
;
// 2. Student List:
// o An array named students stores information about several students using the Student template.
let student = [];
let student1 = { name: "hira", seniorstatus: false, assignmentDone: true };
let student2 = { name: "hina", seniorstatus: true, assignmentDone: true };
let student3 = { name: "haris", seniorstatus: false, assignmentDone: false };
let student4 = { name: "umar", seniorstatus: true, assignmentDone: true };
let student5 = { name: "Taha", seniorstatus: false, assignmentDone: false };
student.push(student1, student2, student3, student4, student5);
//  Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors and have completed 
// their assignments..
console.log("\n\n \t Assignment No. 4 \n\n ");
function seniorassignmentdone(name) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].seniorstatus === true && student[i].assignmentDone === true) {
            console.log("\nSenior students who have submitted assignment : ", student[i].name.toUpperCase());
        }
    }
    ;
}
seniorassignmentdone(student);
// o Can you guess why this information might be helpful?
// Answer:
// this info can be helpful in different ways for instance:
// 1: in accessing the difficulty level of project like if most of the senior students can submit it means 
// all other student can do it.
// 2: how many senior students are available to help other students.
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have a function that removes 
// students who haven't completed their assignments (assuming only seniors are responsible).
function updateclasslist(name) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].assignmentDone === true) {
            console.log("\n students who have submitted assignment :", student[i].name.toUpperCase());
        }
    }
    ;
}
updateclasslist(student);
// o Can you think of any reasons why this might be useful (consider limitations)?
// Answer:
// The info is useful in organising the data of students for their grades as assignment 
// also counts as per given assumption only senior students are responsible may be they are not as 
// helpful as they should or might be the assignment is so difficult that even snior are unable to do
// and report the teacher timely to arrange extra class .
