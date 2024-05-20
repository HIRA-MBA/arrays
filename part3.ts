// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
type Employee = {
    name : string;
    hoursworked : number;
    hourlyrate: number;
    baseSalary: number;
    bonus?: number;// if employee works more than 20 hours bonus will be added
    grosssalary?:number // sum of base salary , bonus and hoursworked* hourlyrate 
};



// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.

let employee : Employee[] = [
{name :"Babar",hoursworked : 15 ,hourlyrate:450,baseSalary:5000},
{name :"Azam",hoursworked : 25 ,hourlyrate:550,baseSalary:15000},
{name :"Shoaib",hoursworked : 22 ,hourlyrate:400,baseSalary:10000},
{name :"Rizwan",hoursworked : 12 ,hourlyrate:700,baseSalary:25000,},
];

// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
function calculateSalary(employee:Employee,hours=employee.hoursworked,rate=employee.hourlyrate) {
   
   
 let salary = employee.hourlyrate * employee.hoursworked;
 let grosssalary = salary+employee.baseSalary;

 if (employee.hoursworked>20){ let bonus = 0.1* employee.baseSalary;
    grosssalary = salary+employee.baseSalary +bonus;
    employee.bonus=bonus;} return employee.grosssalary=grosssalary;
    
 
   
 };

//  iteration through employee to print all its properties

console.log("\n\n \t Part 3 : employee and salaries \n\n");
for(let i=0; i<employee.length;i++)
  {employee[i].grosssalary=calculateSalary(employee[i]);
    console.log(employee[i])
  }