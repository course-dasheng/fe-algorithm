/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//  [ 1, 1, 1, 1 ], [ 1, 000], [ 1, 000 ], [ 000, 1 ]
var uniquePaths = function(m, n) {
  // const dp = new Array(n).fill(m).map(()=>{
  //   return new Array(n).fill(1)
  // })
  const dp = new Array(m).fill('').map(i=>new Array(n).fill(''))
  for(let i=0;i<m;i++){
    dp[i][0] = 1
  }
  for(let i=0;i<n;i++){
    dp[0][i] = 1
  }
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      dp[i][j] = dp[i-1][j]+dp[i][j-1]
    }
  }
  return dp[m-1][n-1]

};
// @lc code=end

