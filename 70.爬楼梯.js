/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // n层台阶 有多少种方法
  // n-1层 +1
  // n-2层 +2
  let dp = [1,2]
  for(let i=2;i<n;i++){
    dp[i] = dp[i-1]+dp[i-2]
  }
  return dp[n-1]
};
// @lc code=end

