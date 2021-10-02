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
    var c = N + ' ' + (N * 2) + ' ' + (N * 3);
    console.log(c);

  //end-here
});