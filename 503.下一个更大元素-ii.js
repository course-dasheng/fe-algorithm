/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  // [...nums,...nums]
  let len = nums.length
  const stack = []
  let res = new Array(len).fill(-1)
  for(let i=0;i<len*2;i++){
    let num = nums[i%len]
    while(stack.length && num>nums[stack[stack.length-1]]){
      const index = stack.pop()
      res[index] = num
    }
    stack.push(i%len)
  }
  return res
};
// @lc code=end

