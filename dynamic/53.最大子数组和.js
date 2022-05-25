/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  let ret = nums[0]
  for(let i=1;i<nums.length;i++){
    dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
    ret = Math.max(dp[i],ret)
  }
  return ret
  // dp[i】i之前的数组，最大连续和是dp[i]
 }
var maxSubArray1 = function(nums) {
  let ret = -Infinity
  let count = 0
  for(let i=0;i<nums.length;i++){
    count+=nums[i]
    if(count>ret){
      ret = count
    }
    if(count<0){
      count=0
    }
  }
  return ret
};
// @lc code=end

