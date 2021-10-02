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
    var a = parseInt(userInput[0]);
    var sum = 0;
    while(a > 0){
        
        var r = a % 10;
        sum += r;
        a = parseInt(a / 10);
        
    }
    console.log(sum);
  //end-here
});