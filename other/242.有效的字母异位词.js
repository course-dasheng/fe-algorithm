/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // ratr
  // car
  // charCodeAt()
  // [1,0,,,,,,,2,,,]
  // b
  if(s.length!==t.length){
    return false
  }
  let obj = {}

  // let arr = new Array(26).fill(0)
  // let base = 'a'.charCodeAt(0)
  for(let i=0;i<s.length;i++){
    if(s[i] in obj){
      obj[s[i]] +=1
    }else{
      obj[s[i]] = 1
    }
    if(t[i] in obj){
      obj[t[i]] -=1
    }else{
      obj[t[i]] = -1
    }
  }
  return Object.keys(obj).every(k=>obj[k]===0)
};
// @lc code=end

