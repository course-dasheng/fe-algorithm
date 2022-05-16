/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  // dp[i] 凑齐i块钱的不同金额种类
  // 1,2,5
  // dp[i]
  // i=100
  // 99,98,95
  let dp = new Array(amount+1).fill(0)
  dp[0] = 1
  for(let i=0;i<coins.length;i++){  // 硬币
    for(j=coins[i];j<=amount;j++){ //凑齐amount剩下的空间
      dp[j] += dp[j-coins[i]]
    }
  }
  return dp[amount]
  // 1块钱，
  // coins = [1,2,5,10]
  // amount = 125
  // // 能不能凑齐125，凑齐125最少硬币方式 ，凑齐125 有多少种排列组合的方式
  // dp[i] 钱数是i的组合种类是dp[i]

  // for(let j=coins[i],j<amount;j++){
  //   dp[j] = 
  // }
  // dp[125] = dp[125-coins[0]] +dp[125-coins[1]]+dp[125-coins[2]]  

};  
// @lc code=end

