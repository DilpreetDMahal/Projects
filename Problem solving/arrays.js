/**
 * Write the function sumInput() that:

-- Asks the user for values using prompt and stores the values in the array.
-- Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
-- Calculates and returns the sum of array items.
-- P.S. A zero 0 is a valid number, please don’t stop the input on zero.
 
 */

function sumInput() {
  let arr = [];
  let sum = 0;
  let userNumber = parseInt(prompt("Please enter a number"));

  while (true) {
    if (!isNaN(userNumber)) {
      arr.push(userNumber);
      userNumber = parseInt(prompt("Please enter a number"));
    } else {
      for (let n of arr) {
        sum += n;
      }
      break;
    }
  }
  return `The sum of arrays : ${sum}`;
}

console.log(sumInput());
