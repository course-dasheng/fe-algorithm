/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  // 遍历s
  // 遍历t
  // dp[i][j]  s中以i结尾的子序列中，出现t中j之前的字符串的个数dp[i][j]

  // babgbag
  // bag

  // s[i] t[j] 相等  
  //   用s[i-1] 之前的字符串匹配 dp[i-1][j-1]
  //   不用s[i-1] 之前dp[i-1][j]
  // s[i] t[j] 不相等
  //   s[i-1]来匹配 d[i-1][j]
  let dp = new Array(s.length+1).fill(0).map(item=>{
    return new Array(t.length+1).fill(0)
  })

  for(let i=0;i<=s.length;i++){
    dp[i][0] = 1
  }

  for(let i=1;i<=s.length;i++){
    for(let j=1;j<=t.length;j++){
      if(s[i-1]==t[j-1]){
        dp[i][j] = dp[i-1][j-1]+dp[i-1][j]
      }else{
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  // console.log(dp)
  return dp[s.length][t.length]
};
// numDistinct('babgbag','bag')
// @lc code=end

