function sumValues(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key]
    }
  }
  return sum
}

// Time O(n)
// Space O(1)

console.log(sumValues({ a: 1, b: 2, c: 3 }));
console.log(sumValues({ a: 1, b: "string", c: true, d: 3 })); 
console.log(sumValues({ a: 1, b: undefined, c: null, d: 4 })); 
console.log(sumValues({ a: 10, b: "20", c: 30, d: false }));