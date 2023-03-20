//first we import the readline in order to take the input from the user and run it in node

const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.question("Enter your driving speed: ",function(speed){
    console.log(checkSpeedForPoints(parseInt(speed)));
    rl.close();
});

//we then check if the speed is below the  safe driving speed of 70,
//if the speed is exceeded we increase the demrit points per 5km over the limit
function checkSpeedForPoints(speed){
    if (speed < 70){
        return ('ok')
    }
    else if(speed>70){
        const demeritPoints = Math.floor((speed - 70) / 5)
        return (`${demeritPoints} has been deducted from your merit points.Please Drive safe`)
    }
    
}


