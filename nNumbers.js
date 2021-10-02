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
    for(var i = 1; i <= N; i++)
    {
        console.log(i);
    }
  //end-here
});