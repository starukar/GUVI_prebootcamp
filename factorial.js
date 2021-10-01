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
  
  var c = userInput[0];
  
  var factorial = 1 ;
  
  c = parseInt(c);
  
  for( var i = 1 ; i <= c ; i++)
  {
      factorial *= i ;
  }
  
  console.log(factorial);
  

  

  //end-here
});