/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// 规划这个最小值
// dp 你到哪第一个台阶所需要的最小花费 是dp[i]
var minCostClimbingStairs = function(cost) {
  // [10,15,20]
  // dp其实不需要一个这么长的数组
  let dp = [cost[0],cost[1]]
  for(let i=2;i<cost.length;i++){
    dp[i] = Math.min(dp[i-1] ,dp[i-2])+cost[i] 
  }
  return Math.min(dp[cost.length-1],dp[cost.length-2])
};
// @lc code=end

