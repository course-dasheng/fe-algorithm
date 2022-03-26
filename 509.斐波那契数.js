/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 递推
function helper(memo,n){
    if(n<=1){
      return n
    }
    if(memo[n]){
      return memo[n] //返回缓存的结果
    }
    memo[n] = helper(memo,n-1)+helper(memo,n-2)
    return memo[n]
}
var fib = function(n) {
  // let memo = []
  // return helper(memo,n)


    // 带一个备忘录 缓存中间的计算结果
    // if(n<=1){
    //   return n
    // }
    // return fib(n-1)+fib(n-2)
    // dp[i] 就是第i个值得数字
    // dp[i] = dp[i-1]+dp[i-2]
    // [0,1]
    // let dp = [0,1]

    // for(let i=2;i<=n;i++){
    //   dp[i] = dp[i-1]+dp[i-2]
    // }
    // return dp[n]
    // 数组优化成两个数字
    // 数学公式 
    // 还可以用矩阵去优化公式中浮点数的N次方计算
    if(n<=1){
      return n
    }
    let dp1 = 0 
    let dp2 = 1
    let dp3
    for(let i=2;i<=n;i++){
      dp3 = dp1+dp2
      dp1 = dp2
      dp2 = dp3
    }
    return dp3
};
// @lc code=end

