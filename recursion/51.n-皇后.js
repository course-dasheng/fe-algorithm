/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  // [1,3,0,2]
  let ret = []
  let path = []
  backtrack(0,path)
  return ret
  function backtrack(row,tmp){

    if(row===n){
      ret.push(
        tmp.map(c=>{
          let arr = new Array(n).fill('.')
          arr[c] = 'Q'
          return arr.join('')
        })
      )
    }
    // row 第几行
    for (let col = 0; col < n; col++) {
      let  canNotSet = tmp.some((c,r)=>{
        return c==col || ((r-c)===(row-col)) || ((r+c)===(row+col))
      })
      if(canNotSet){
        continue
      }
      backtrack(row+1,[...tmp,col])
      
    }
  }
  // r c    row col 
  // r==row c==col r-c==row-col r+c row+col
};

// @lc code=end

