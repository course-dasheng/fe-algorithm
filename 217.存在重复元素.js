/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length-1;i++){
    if(nums[i]===nums[i+1]){
      return true
    }
  }  
  return false

  // let obj = {} //额外的On的空间复杂度
  // for(let num of nums){
  //   if(num in obj){
  //     return true
  //   }
  //   obj[num] = true
  // }
  // return false
  // return new Set(nums).size !==nums.length
};
// @lc code=end

