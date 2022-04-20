/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  // 分割问题
  // 101023
  // 1|  12|  101| 后面直接终止
  // 0|
  let ret = []
  let path = []
  backtrack(0)
  return ret

  function backtrack(i){
    if(path.length>4){
      return
    }
    if(path.length===4 && i===s.length){
      ret.push(path.join('.'))
      return
    }
    // 判断终止条件
    for(let j=i;j<s.length;j++){
      // 要得符合ip的判断逻辑
      const str = s.substr(i,j-i+1)
      if(Number(str)>255){
        break
      }
      if(str.length>1 && str[0]==='0'){
        break
      }
      path.push(str)
      backtrack(j+1) //切下一个
      path.pop()
    }
  }

};
// @lc code=end

