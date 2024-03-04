function fibonacci(n) {
    let fibSequence = [0, 1]; // Initialize with the first two Fibonacci numbers

    // Generate Fibonacci sequence up to the nth number
    while (fibSequence.length < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }

    return fibSequence;
}

// Example usage
const n = 20; // Count up to the 10th Fibonacci number
const sequence = fibonacci(n);
console.log(sequence);
