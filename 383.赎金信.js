/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr = new Array(26).fill(0)
    let base = 'a'.charCodeAt(0)
    for(const m of magazine){
      arr[m.charCodeAt()-base]++
    }
    for(const r of ransomNote){
      arr[r.charCodeAt()-base]--
    }
    return arr.every(v=>v>=0)
};
// @lc code=end

