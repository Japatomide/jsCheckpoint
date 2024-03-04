// function that reverses string

function stringReverse(string) {
    const reversedString = string.split('').reverse().join('');
    return reversedString
}

// Example usage
console.log(stringReverse('Paul')); // will output reversed string 'luaP'