function reversArr(num) {
  let start = 0;
  let end = num.length - 1;
  while (start < end) {
    let temp = num[start];
    num[start] = num[end];
    num[end] = temp;
    start++
    end--
  }
  return num;
}

console.log(reversArr([10, 20, 4, 45, 99]));