const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0){
        reader.question("Enter a number: ", function (num1) {
            const num = parseInt(num1);
            sum += num;
            console.log(sum);
            numsLeft -= 1;
            addNumbers(sum, numsLeft, completionCallback);
            
        });
    } else if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
    } else {
        return null;
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));