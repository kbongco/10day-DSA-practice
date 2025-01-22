function sumOfArr(arr) {
  let num = 0;
  for (let nums of arr) {
    num += nums;
  }
  return num;
  // return arr.reduce((acc,num) => acc + num,0)
}

console.log(sumOfArr([1, 2, 3, 4, 5]))
// should be 15
