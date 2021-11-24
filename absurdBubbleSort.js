const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question("Is ele1 greater than ele2?", function(answer) {
        if (answer === 'yes'){
            callback(true);
        } else {
            callback(false);
        }
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if (i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
            if (isGreaterThan == true){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                madeAnySwaps = true;
                console.log(arr); // TEST
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        });
    } else if (i == arr.length - 1){
        debugger
        outerBubbleSortLoop(madeAnySwaps);
    }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    outerBubbleSortLoop(true);

    function outerBubbleSortLoop(madeAnySwaps){
        if (madeAnySwaps == true){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop());
        } else{
            sortCompletionCallback(arr);
        }
    }
}


absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    // reader.close();
});