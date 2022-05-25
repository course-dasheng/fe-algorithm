/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
  let len = digits.length //要匹配的结果长度
  const arr = [
    '','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'
  ]
  if (!len){
    return []
  }
  if(len===1){
    return arr[digits].split('')
  }
  let res = []
  let path = []
  backtrack(digits,len,0)
  return res
  function backtrack(digits,l,i){
    if(path.length===l){
      res.push(path.join(''))
      return 
    }
    
    for(const v of arr[digits[i]]){
      path.push(v)
      backtrack(digits,l,i+1)
      path.pop()
    }
  }
  
  // 终止条件
  // 遍历{
  //   backtrack()

  // }
  // function backtrack(){
  //   // 终止条件
  //   // 标记
  //   // backtrack()
  //   // 撤回标记
  // }
};
// @lc code=end

