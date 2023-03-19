//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

//we need the promp strict module in order to take user input 


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your mark: ", function (mark) {
  studentGrade(parseInt(mark));
  rl.close();
});


function studentGrade(mark){
    //first we will check the value of the grades
    if (mark >= 0 && mark < 40) {
      grade = "E";
      return console.log(`your mark is ${mark} and your grade is ${grade}`);
    } 
    else if (mark >= 40 && mark <= 48) {
      grade = "D";
      return console.log(`your mark is ${mark} and your grade is ${grade}`);
    } else if (mark >= 49 && mark <= 58) {
      grade = "C";
      return console.log(`your mark is ${mark} and your grade is ${grade}`);
    } else if (mark >= 60 && mark <= 78) {
      grade = "B";
      return console.log(`your mark is ${mark} and your grade is ${grade}`);
    } else if (mark >= 79 ) {
      grade = "A";
      return console.log(`your mark is ${mark} and your grade is ${grade}`);
    }
     
}


