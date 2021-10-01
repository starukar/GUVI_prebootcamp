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
  var month = parseInt(userInput[0]);
    
    var numberOfDays = 0 ;
    
    switch (month) {
            case 1:
                
                numberOfDays = 31;
                break;
                
            case 2:
                
                numberOfDays = 28;
                break;
                
            case 3:
                
                numberOfDays = 31;
                break;
                
            case 4:
                
                numberOfDays = 30;
                break;
                
            case 5:
                
                numberOfDays = 31;
                break;
                
            case 6:
                
                numberOfDays = 30;
                break;
                
            case 7:
                
                numberOfDays = 31;
                break;
                
            case 8:
                
                numberOfDays = 31;
                break;
                
            case 9:
                
                numberOfDays = 30;
                break;
                
            case 10:
                
                numberOfDays = 31;
                break;
                
            case 11:
                
                numberOfDays = 30;
                break;
                
            case 12:
                
                numberOfDays = 31;
                break;
                
            default:
                
                numberOfDays = "Error";
        }
        
        console.log(numberOfDays);

  //end-here
});