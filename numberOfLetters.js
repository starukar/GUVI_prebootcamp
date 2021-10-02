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
    var a = userInput[0].split(" ");
    var sum = 0;
    for(var i = 0; i < a.length; i++){
        sum += a[i].length;
    }
    console.log(sum);
  //end-here
});