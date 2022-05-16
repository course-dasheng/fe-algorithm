/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
  // dp = []
  // dp[i] = dp[]递推
  let len = prices.length
  let has = -prices[0]
  let notHas = 0
  // 持有  不持有后，手里的现金
  for(let i=1;i<len;i++){
    has = Math.max(has,notHas-prices[i])
    notHas = Math.max(notHas, has+prices[i])
  }
  return notHas
};

var maxProfit1 = function(prices) {
  let ret = 0
  // [4,1,3,5,7]
  for(let i=1;i<prices.length;i++){
    if(prices[i]-prices[i-1]>0){
      ret += prices[i]-prices[i-1]
    }
    // resut += Math.max(prices[i]-prices[i-1],0)
  }

  return ret
};
// @lc code=end

