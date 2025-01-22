// Find the Second Largest Number in an Array

function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}


secondLargest([10, 20, 4, 45, 99])
// Expected Output is 45
secondLargest([4, 33, 10, 45]);
// Expected output is 33
secondLargest([55, 20]);
// Expected output is 20