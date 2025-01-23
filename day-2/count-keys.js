function countKeys(obj) {
  return Object.keys(obj).length;
}

// Time O(n);
// Space O(1)

console.log(countKeys({ a: 1, b: 2, c: 3 })) 