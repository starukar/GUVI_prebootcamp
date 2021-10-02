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
    
    var c = '9';
    
    
    for(var i = 2; i <= N; i++)
    {
        var r = 9 * i;
        c += ' ' + r ;
    }
    
    console.log(c);

  //end-here
});