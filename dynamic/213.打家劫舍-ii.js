/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // [1,2,3,4]

  // [2,3,4]
  // [1,2,3]
  const len = nums.length
  if(len===0){
    return 0
  }
  if(len===1){
    return nums[0]
  }
  const ret1 = robRange(nums,0,len-2)
  const ret2 = robRange(nums,1,len-1)
  return Math.max(ret1,ret2)
};
function robRange(nums,start,end){
  if(end===start){
    return nums[start]
  }
  const dp = new Array(nums.length).fill(0)
  dp[start] = nums[start]
  dp[start+1] = Math.max(nums[start],nums[start+1])
  for(let i=start+2;i<=end;i++){
    dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
  }
  return dp[end]
}
// @lc code=end

