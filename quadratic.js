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
    var q = userInput[0].split(" ");
    
    var a = parseFloat(q[0]);
    var b = parseFloat(q[1]);
    var c = parseFloat(q[2]);
    
    var root = 0;
    
    root = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    console.log(root.toFixed(2));
    
    root = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    console.log(root.toFixed(2));

  //end-here
});