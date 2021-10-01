const readline = require('readline');
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
    var f = +c * 9 / 5 + 32;
    f = f.toFixed(2);
        
        
    console.log(f);




//end-here
});
