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
    console.log(((Math.sqrt(3) * N * N) / 4) .toFixed(2));
  //end-here
});