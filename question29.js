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
    var N = parseInt(userInput[0]);
    
    for(var i = N ; i >= 1; i --){
        
        console.log(i);
    }
  //end-here
});