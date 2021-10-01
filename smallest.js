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
    
    a[0] = parseFloat(a[0]);
    a[1] = parseFloat(a[1]);
  
    if(a[0] < a[1]){
        console.log(a[0]);
    }
    else{
        console.log(a[1]);
    }
  
    
   
  
  //end-here
});