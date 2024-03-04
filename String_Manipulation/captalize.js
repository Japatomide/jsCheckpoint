// function that capitalizes the first letter of any word 

function capitalizeWord(word) {
    const firstLetter = word[0].toUpperCase()
    const otherLetters = word.slice(1)
    const result = firstLetter + otherLetters
    return result;
}

// Example usage
console.log(capitalizeWord('perfect'));