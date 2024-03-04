// a function that checks if a number is prime

function isPrime(num) {
    if (num === 1) return false;
    for(let i=2; i<num; i++) {
        if(num % 2 == 0) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log(isPrime(13))