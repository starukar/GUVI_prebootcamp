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
    var N = userInput[0].split(" ");
    var P = parseFloat(N[0]);
    var R = parseFloat(N[1]);
    var T = parseFloat(N[2]);

    console.log(((P * T *R) / 100).toFixed(2));

  //end-here
});