function smallestSub(arr, S) {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];

    while (currentSum > S) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= arr[left];
      left += 1
    }
  }

  return minLength === Infinity ? 0 : minLength;

}