// A function that adds up all the elements in an array.

function sumOfArray(array) {
    let sum = 0;
    for (let i=0; i<array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Example Usage
const array = [1,2,3,4,5];
console.log(sumOfArray(array));