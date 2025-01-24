function validParen(str) {
  let stack = [];
  let parenObj = { '(': ')', '{': '}', '[': ']' };
  for (let x of str) {
    if (x in parenObj) {
      stack.push(x);
    } else {
      if (stack.length === 0 || parenObj[stack.pop()] !== x) {
        return false
      }
    }
  }
  return stack.length === 0
}

// Time O(n)
// Space O(n)

console.log(validParen('({})'));