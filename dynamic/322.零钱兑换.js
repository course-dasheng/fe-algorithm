/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if(!amount){
    return 0;
  }
  let dp = Array(amount+1).fill(Infinity)
  dp[0] = 0
  for(let i=0;i<coins.length;i++){
    // 针对每一种硬币
    // 2块钱的时候
    for(let j=coins[i];j<=amount;j++){
      // dp[j] 都是Infinity
      dp[j] = Math.min(dp[j-coins[i]]+ 1,dp[j])
    }
  }
  return dp[amount]===Infinity?-1:dp[amount]

  // dp[i] = Infinity

  // 2,5  想的得到一个11
  // dp[11] = Math.min(dp[10],dp[9],dp[6])+1
  // 固定金额下，最少的个数

  // 边界条件
  // 循环：
  //   递推公式
  // 循环硬币
  //   dp[n] n的钱数下，返回零钱的最优解

  //   如果只有2和5这两种硬币，想找12块钱
  //   dp[n-coins[i]]+ 1 //12块钱的找钱方式
  //   // 10 + 2 块钱
  //   // 7  + 5
};
// @lc code=end

