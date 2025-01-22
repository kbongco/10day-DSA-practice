function smallestNum(arr) {
  let min = Infinity;
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

console.log(smallestNum([5, 3, 10, 100, 40, 1]));
console.log(smallestNum([5, 3, 10, 100, 40, 1])); // Expected output: 1
console.log(smallestNum([3, 1, 4, 1, 5, 9, 2])); // Expected output: 1
console.log(smallestNum([0, -1, -5, 7, 3]));     // Expected output: -5
console.log(smallestNum([100, 100, 100]));        // Expected output: 100 (all elements are the same)
console.log(smallestNum([1]));                    // Expected output: 1 (only one element)
console.log(smallestNum([9, 8, 7, 6, 5]));        // Expected output: 5
console.log(smallestNum([0, 0, 0, 0, 0]));        // Expected output: 0 (all elements are zero)
console.log(smallestNum([-1, -2, -3, -4]));       // Expected output: -4 (all negative numbers)
console.log(smallestNum([15, 25, 35, 45]));       // Expected output: 15 (positive numbers)
console.log(smallestNum([1000, 900, 800, 700]));  // Expected output: 700 (larger values)

// Time is O(n);
// Space is O(1);