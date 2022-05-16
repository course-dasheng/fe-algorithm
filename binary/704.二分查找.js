/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 总结二分的大概公式
  // 先看中点的值 
  //5,9,12] [-1,0,3, 
  // 9
  let left = 0
  let right = nums.length-1 //我们是可以访问到right的
  while(left<=right){ // left == right-1
    // let mid = (left+right)>>1 // 
    let mid = left + ((right-left)>>1) 
    // 其实这么写 也有小隐患 最稳妥的 位运算
    // left right相加，可能会越界

    // 如果数组的长度限制是10
    // left 5  right 7    5+7 = 12
    // mid 6

    if(nums[mid]<target){
      // 在mid右边边继续查找
      left = mid+1
    }else if(nums[mid]>target){
      // 在mid左边继续查找  
      right = mid-1
    }else if(nums[mid]===target){
      return mid
    }
  }
  return -1
  // return nums[left]===target?left:-1
  // for (let i = 0; i < nums.length; i++) {
  //   if(nums[i]===target){
  //     return i
  //   }
  // }
  // return -1
};
// @lc code=end

