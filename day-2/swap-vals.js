function swapVals(obj) {
  const swappedObj = {};
  for (let key in obj) {
    swappedObj[obj[key]] = key; 
  }
  return swappedObj;
}

console.log(swapVals({ a: 1, b: 2, c: 3 }));