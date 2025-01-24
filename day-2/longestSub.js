function longestSub(str) {
  let left = 0;  // left pointer
  let right = 0; // right pointer
  let maxLength = 0;  // Variable to store the length of longest substring
  let seenChars = new Set(); // Set to store unique characters in the current window

  // Iterate through the string
  while (right < str.length) {
    if (!seenChars.has(str[right])) {
      // If the character is not a duplicate, add it to the set and expand the window
      seenChars.add(str[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++; // Move the right pointer forward
    } else {
      // If the character is a duplicate, shrink the window from the left
      seenChars.delete(str[left]);
      left++; // Move the left pointer forward
    }
  }

  return maxLength; // Return the length of the longest substring without duplicates
}