/*




THis code has three solutions for three problems
uncomment each solution for each problem.
The first one is uncommented for you




*/

// PROBLEM 3A => Create an interface for reading input from the user in order to calculate the net salary


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their basic salary and benefits
// this code  block asks the user to enter the basic salary and benefits and gives the net salary

rl.question('Enter your basic salary: ', (basicSalary) => {
  rl.question('Enter your benefits: ', (benefits) => {
    // Convert the inputs to numbers
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);

    // Calculate the net salary
    const netSalary = basicSalary + benefits; 

    // Display the result to the user
    console.log(`Your net salary is ${netSalary}`);
    
    // Close the interface
    rl.close();
  });
});

//


// PROBLEM 3B => Create an interface for reading input from the user


// Create a function that takes in the salary of an individual and returns the tax rate
//this block takes in the gross salary and returns the taxrate depending  on the salary input into the function

/*
function calculateTaxRate(grossSalary) {
    let taxRates;
    if (grossSalary >= 24000 && grossSalary <= 288000) {
      taxRates = 0.01;
    } else if (grossSalary > 288000 && grossSalary <= 388000) {
      taxRates = 0.25;
    } else {
      taxRates = 0.30;
    }
    return taxRates;
  }

  console.log(`Your tax rate is ${calculateTaxRate(30000)}`);

*/
// PROBLEM 3C => Creates a function to calculate the nhif deduction

/*
function calculateNhif(grossPay) {
    let nhif;
    if (grossPay <= 5999) {
      nhif = 150;
    } else if (grossPay <= 7999) {
      nhif = 300;
    } else if (grossPay <= 11999) {
      nhif = 400;
    } else if (grossPay <= 14999) {
      nhif = 500;
    } else if (grossPay <= 19999) {
      nhif = 600;
    } else if (grossPay <= 24999) {
      nhif = 750;
    } else if (grossPay <= 29999) {
      nhif = 850;
    } else if (grossPay <= 34999) {
      nhif = 900;
    } else if (grossPay <= 39999) {
      nhif = 950;
    } else if (grossPay <= 44999) {
      nhif = 1000;
    } else if (grossPay <= 49999) {
      nhif = 1100;
    } else if (grossPay <= 59999) {
      nhif = 1200;
    } else if (grossPay <= 69999) {
      nhif = 1300;
    } else if (grossPay <= 79999) {
      nhif = 1400;
    } else if (grossPay <= 89999) {
      nhif = 1500;
    } else if (grossPay <= 99999) {
      nhif = 1600;
    } else {
      nhif = 1700;
    }
    return nhif;
  }
console.log(calculateNhif(58222))
*/