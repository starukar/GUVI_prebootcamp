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
var length = userInput[1];
var breadth = userInput[0];

var area = +length * +breadth;

console.log(area);

//end-here
});

