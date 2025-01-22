function removeDup(arr) {
  let noDuplicates = [];
  for (let i = 0; i < arr.length; i++){
    if (!noDuplicates.includes(arr[i])) {
      noDuplicates.push(arr[i])
    }
  }
  return noDuplicates
}
// Time and Space 
// Time O(n^2);
// Space O(n)

console.log(removeDup([1, 2, 2, 3, 4, 4, 5]));