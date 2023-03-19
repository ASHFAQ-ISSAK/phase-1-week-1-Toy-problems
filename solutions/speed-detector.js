//first we import the readline in order to take the input from the user and run it in node

const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.question("Enter your driving speed: ",function(speed){
    checkSpeedForPoints(parseInt(speed))
});


function checkSpeedForPoints(speed){
    if (speed <= 70){
        return console.log('ok')
    }
    else if(speed>70){
        const demeritPoints = Math.floor((speed - 70) / 5)
         console.log(`${demeritPoints} has been deducted from your merit points.Please Drive safe`)
    }
    rl.close();
}


