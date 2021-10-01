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
  
    
    console.log(a * 1000);
    console.log(a * 100000);
  
  //end-here
});