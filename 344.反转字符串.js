/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // return s.reverse()
  let left = 0
  let right = s.length-1
  while(left<=right){
    let tmp = s[left]
    s[left] = s[right]
    s[right] = tmp
    left++
    right--
  }
};
// @lc code=end

