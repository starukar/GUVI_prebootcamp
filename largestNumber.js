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
  
    var a = parseFloat(userInput[0]);
    var b = parseFloat(userInput[1]);
    var c = parseFloat(userInput[2]);
    
    var largest = 0 ;
    
    if(a >= b && a >= c) {
        largest = a;
    }
    else if (b >= a && b >= c) {
        largest = b;
    }
    else {
        largest = c;
    }

    
    console.log(largest);
    
  
  //end-here
});