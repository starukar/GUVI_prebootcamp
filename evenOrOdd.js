// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
    var N = parseFloat(userInput[0]);
    N = N.toFixed(0);
    if( N === 0 ){
        console.log('Zero');
    }
    else{
        if( N % 2 === 0){
            console.log('Even');
        }
        else{
            console.log('Odd');
        }
    }

  //end-here
});