/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter(i=>nums2.includes(i)))]

  let retSet = new Set()
  let num1Set = new Set(nums1)
  for(let i of nums2){
    if(num1Set.has(i)){
      retSet.add(i)
    }
  }
  return [...retSet]
};
// @lc code=end

