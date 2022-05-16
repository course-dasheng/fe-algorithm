/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // [4,5,6,7,   0,1,2]
  // 两个升序数组排在一起
  // 左边数组比右边都大
  // 最小值得特点：唯一一个，比左右都小的数字
  let left = 0
  let right = nums.length-1
  while(left<right){
    let mid = left + ((right-left)>>1)
    if(nums[mid]<nums[right]){
      right = mid
    }else if(nums[mid]>nums[right]){
      left = mid+1
    }
  }
  return nums[left]
};
// @lc code=end

