"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Create an array named students containing at least three student objects. Each student
// object should include a name and an array of grades.
let students = [{ name: "abc", grades: [65, 65, 35, 78, 85, 55] },
    { name: "xyz", grades: [25, 35, 45, 78, 85, 55] }, { name: "efg", grades: [65, 65, 78, 89, 65, 55] },];
// 3. Implement a function named calculateAverageGrade that takes a student's grades as
// input and returns the average grade for that student.
function calculateAverageGrade(student, grades = student.grades) {
    let average = grades.reduce((total, grades) => total + grades, 0) / grades.length;
    return Math.round(average);
}
;
// 4. Display each student's name and average grade. Iterate through the students array,
// calculate the average grade for each student using the calculateAverageGrade
// function, and print their name and average grade.
console.log("\n\n \t Part 2 : Student , grades and Average Grade \n\n ");
for (let i = 0; i < students.length; i++) {
    console.log("Student Name:", students[i].name, "\n\n", "grades :", students[i].grades, "\n\n", "Average grade = ", calculateAverageGrade(students[i]), "\n\n\n");
}
