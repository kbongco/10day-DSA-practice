/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // The next thing I would be thinking of is what data structure to use to keep track of the amount of numbers, in this case i would use a hashmap to optimize look up times
  let numMap = new Map();
  // Then I would use a loop to go through my array to store it into the map. Inside that loop, we would check and see if the number already exists in the map, if not we store it into the map initializing it with a count of one. If it already exists then we write an else statement which would retrieve the number and add +1 count to it. 
  for(let num of nums){
      if(!numMap.has(num)){
          numMap.set(num,1)
      } else {
          numMap.set(num, numMap.get(num)+1);
      }
  }
  // The next thing I would do is to create the finalAnswer array and actually get the keys from there and sorting it out and slicing it if It needs to be sliced 
      let finalAnswer = [...numMap.keys()].sort((a, b) => numMap.get(b) - numMap.get(a)).slice(0, k)

  return finalAnswer;
};