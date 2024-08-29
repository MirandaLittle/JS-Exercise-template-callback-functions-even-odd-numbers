'use strict';

/////////////////////////////////////////////////////////////////
// Exercise template



const checkEven = number => {
  const remainder = number % 2;
  if (remainder === 0) {
  return true 
  } else {
    return false
  }
}

const checkOdd = number => {
  const remainder = number % 2;
  if (remainder !== 0) {
    return true
  } else {
    return false
  }
}

const filterFunction = (numbersArray, callbackFn) => {
  const result = [];
  for (const number of numbersArray) {
    if (callbackFn(number)) {
      result.push(number);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterFunction(numbers, checkOdd))