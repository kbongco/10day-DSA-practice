function keyExists(obj, key) {
  return obj.hasOwnProperty(key)
}
// Time O(n)
// Space O(1)

console.log(keyExists({ a: 1, b: 2 }, 'a'));
console.log(keyExists({ a: 1, b: 2 }, 'c'));
console.log(keyExists({}, 'a'));