/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let ret = []
  let path = [] //递归的时候用的临时，用来统计[2]
  backtrack(n,k,1)

  return ret
  function backtrack(n,k,i){
    let len = path.length
    if(len===k){
      ret.push([...path])
      return 
    }
    // n=4，k=2  i = 1  len = 0
    // 1,2,3 选4，后面就没了
    for(let j=i;j<=n-k+len+1;j++ ){
      path.push(j)  
      backtrack(n,k,j+1)
      path.pop()
    }
  }
//   n=4 k=4
//   root
// 1,         2,    3, 4

// 2,3,4,     3,4    [4]

// 34
  // N叉树的遍历  剪枝
  // n = 4, k = 2
//   root
//   [1,2,3,4]
// 1. 取1   [2,3,4]    
//   取2     
//   3
//   4
// 2. 2     [3,4]
// 3  3     [4]
// 4  4      []
};
// @lc code=end

