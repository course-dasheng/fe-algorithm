/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//  输入：board = 
// [["A","B","C","E"],
//   ["S","F","C","S"],
//   ["A","D","E","E"]
// ], word = "ABCCED"
//  输出：true

var exist = function(board, word) {
  // 输入的终止条件
  if(board.length===0) {
    return false
  }
  if(word.length===0){
    return true
  }
  //开始循环找
  let row = board.length
  let col = board[0].length
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      //每一个字母都可以作为起点搜索
      const ret = find(i,j,0)  //0就是当前查询的字母索引
      if(ret){
        return ret
      }
    }
  }
  return false //结束的时候还没找到
  //递归函数
  function find(i,j,cur){
    if(i>=row || i<0){
      return false
    }
    if(j>=col || j<0){
      return false
    }
    
    // if()
    let letter = board[i][j]
    // 查询结束判断
    if(letter!==word[cur]){
      return false
    }
    if(cur==word.length-1){
      // 最后一个 也是匹配的
      return true
    }
    
    board[i][j] = null //选择当前的字母
    // 进行下一步 有一个找到就算
    const ret = find(i+1,j,cur+1) ||
                find(i-1,j,cur+1) ||
                find(i,j+1,cur+1) ||
                find(i,j-1,cur+1)
    board[i][j] = letter //回撤
    return ret
  }
};
// @lc code=end

