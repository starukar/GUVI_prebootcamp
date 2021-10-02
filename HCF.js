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
    var a = parseInt(N[0]);
    var b = parseInt(N[1]);
    
    for(var i = 1; i <= a && i <= b; i++){
        
        if(a % i === 0 && b % i === 0){
            HCF = i;
        }
    }
    
    console.log(HCF)
  //end-here
});