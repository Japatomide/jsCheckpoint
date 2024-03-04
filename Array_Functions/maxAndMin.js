function findMinMax(numbers) {
  if (numbers.length === 0) {
    return {
      maxNumber: undefined,
      minNumber: undefined
    };
  }

  let maxNumber = numbers[0];
  let minNumber = numbers[0];

  for(let i=1; i<numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }

    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  }

  return {
    maxNumber: maxNumber,
    minNumber: minNumber
  }
}

// Example Usage
const array = [1,2,3,4,249]
console.log(findMinMax(array));