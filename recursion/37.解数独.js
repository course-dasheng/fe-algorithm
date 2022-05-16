/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// @todo 优化空间
var solveSudoku = function(board) {
  // solveSudoku递归什么时候终止
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9;  j++) {
      if(board[i][j]!=='.'){
        continue
      }
      // 开始放数字
      // 你可以放1~9
      for(let k=1;k<=9;k++){
        // 判断数独是不是合理
        k = k.toString()
        if(isValid(board,i,j,k)){
          board[i][j] = k
          //放下一个数字的解
          if(solveSudoku(board)){
            return true
          }
          board[i][j] = '.'
        }
      }
      // 放不了 没有return
      return false
    }   
  }
  return true //找到解 放完了

};
function isValid(board, row,col,k){

  for(let i=0;i<9;i++){
    if(board[row][i]===k || board[i][col]===k){
      return false
    }
  }
  const x = Math.floor(row/3) *3
  const y = Math.floor(col/3) *3
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(board[x+i][y+j]===k){
        return false
      }
    }
  }
  return true

}
// @lc code=end

