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
    console.log((a + b).toFixed(1));

  //end-here
});