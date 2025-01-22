function sumNum(obj) {
  let sum = 0;
  for (let key in obj) {
    sum+=obj[key]
  }
  return sum
}

// Time is O(n);
// Space is O(1)

console.log(sumNum({a: 10, b: 20, c: 30})); // Expected output: 60
console.log(sumNum({x: 100, y: 200, z: 300})); // Expected output: 600
console.log(sumNum({})); // Expected output: 0 (empty object)
console.log(sumNum({p: -10, q: -20, r: -30})); // Expected output: -60 (all negative values)
console.log(sumNum({one: 1, two: 2, three: 3})); // Expected output: 6
console.log(sumNum({a: 0, b: 0, c: 0})); // Expected output: 0 (all zeros)
console.log(sumNum({key1: 42})); // Expected output: 42 (single key-value pair)
console.log(sumNum({a: 1.5, b: 2.5, c: 3.5})); // Expected output: 7.5 (decimal values)
console.log(sumNum({a: 10, b: -20, c: 30})); // Expected output: 20 (mix of positive and negative values)
console.log(sumNum({a: 1000000, b: 2000000, c: 3000000})); // Expected output: 6000000 (large values)
