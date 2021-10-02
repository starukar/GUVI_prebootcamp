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
    var s = userInput[0];
    var r = '';

    for(var i = s.length - 1 ; i >= 0; i --){
        
        r += s.charAt(i);
    }
    console.log(r);

  //end-here
});