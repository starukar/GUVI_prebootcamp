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
    
    if(a < 0){
        console.log('Error');
    }
    
    if(a === 0){
        console.log('0');
    }
    
    if(a > 0){
        var j = 1;
        var k = 0;
        for(var i = 1; i <= a; i++){
            k += j;
            
            j += 2;
        }
      console.log(k);  
    }

  //end-here
});