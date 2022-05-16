/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // dp[i][j]
    // word1的slice(0,i) word2.slice(0,j)相互删除字符达到相同所需要的步数

    // word1[i-1]和word2[j-1]
    //   相同
    //     bag
    //     eag
    //     dp[i-1][j-1]
    //   不相同
    //     bag
    //     eat
        
    //     dp[i-1][j]
    //     dp[i][j-1]
    //     dp[i-1][j-1]
    //     取最小值
    let dp = new Array(word1.length+1).fill(0).map(item=>{
      return new Array(word2.length+1).fill(0)
    })
    // word1 '' word2是任意字符串，都是删除全部字符得到
    for(let i=1;i<=word1.length;i++){
      dp[i][0] = i
    }
    for(let j=1;j<=word2.length;j++){
      dp[0][j] = j
    }
    // ba
    // ea
  
    for(let i=1;i<=word1.length;i++){
      for(let j=1;j<=word2.length;j++){
        if(word1[i-1]==word2[j-1]){
          dp[i][j] = dp[i-1][j-1]
        }else{
          dp[i][j] = Math.min(
            dp[i][j-1] +1 ,
            dp[i-1][j] +1 ,
            dp[i-1][j-1]+2
          )
        }
      }
    }
    // console.log(dp)
    return dp[word1.length][word2.length]
          

  };
// @lc code=end

