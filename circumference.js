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
  
  var r = parseFloat(userInput[0]);
    
    var c = 2*3.1415*r;
    
    c = c.toFixed(2);
    
    console.log(c);

  //end-here
});