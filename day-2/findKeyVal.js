function findKey(obj, k) {
  let keyArr = [];
  for (let key in obj) {
    if (obj[key] === k) {
      keyArr.push(key);
    }
  }
  return keyArr;
}

// Time O(n);
// Space O(n)

console.log(findKey({ a: 1, b: 2, c: 1 }, 1));
// Example test cases
const obj1 = { a: 1, b: 2, c: 1, d: 4 };
const obj2 = { key1: "apple", key2: "banana", key3: "apple", key4: "orange" };
const obj3 = { x: true, y: false, z: true };
const obj4 = { a: 5, b: 6, c: 7 };
const obj5 = {}; // Empty object

// Test cases
console.log(findKey(obj1, 1)); // ['a', 'c'] - Multiple keys with value 1
console.log(findKey(obj1, 4)); // ['d'] - Single key with value 4
console.log(findKey(obj1, 10)); // [] - No keys with value 10

console.log(findKey(obj2, "apple")); // ['key1', 'key3'] - Multiple keys with value 'apple'
console.log(findKey(obj2, "orange")); // ['key4'] - Single key with value 'orange'
console.log(findKey(obj2, "grape")); // [] - No keys with value 'grape'

console.log(findKey(obj3, true)); // ['x', 'z'] - Multiple keys with value true
console.log(findKey(obj3, false)); // ['y'] - Single key with value false
console.log(findKey(obj3, null)); // [] - No keys with value null

console.log(findKey(obj4, 5)); // ['a'] - Single key with value 5
console.log(findKey(obj4, 8)); // [] - No keys with value 8

console.log(findKey(obj5, 1)); // [] - Empty object, no keys to return
