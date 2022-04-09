/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length-1
  while(left<=right){
    let mid = left + ((right-left)>>1)
    if(nums[mid]<target){
      left = mid+1
    }else if(nums[mid]>target){
      right = mid-1
    }else if(nums[mid]===target){
      return mid
    }
  }
  return left

};
// @lc code=end

