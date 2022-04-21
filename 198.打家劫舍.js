/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
  // 初始边界
  // 循环
    // dp递推公式
    // dp[i] 下边i之前的房屋，最多可以偷取dp[i]的钱
    let dp = [nums[0], Math.max(nums[0],nums[1])]
    for(let i=2;i<nums.length;i++){
      dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
};
// @lc code=end

