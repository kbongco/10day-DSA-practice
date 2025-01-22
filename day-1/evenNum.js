function findEvenNums(arr) {
  let evenNums = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNums.push(num);
    }
  }
  return evenNums;
}

// Time complexity = O(n) due to the size of the array 
// Space Complexity = O(n) due to creating a new array to store our even values

console.log(findEvenNums([1, 2, 3, 4, 5]))
console.log(findEvenNums([3, 40, 23, 26, 30, 44, 45]));