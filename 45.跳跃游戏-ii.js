/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let curIndex = 0 
  let nextIndex = 0
  let step = 0
  for(let i=0;i<nums.length-1;i++){
    // 哪个远跳哪个
    // [1,2,3]

    nextIndex = Math.max(nums[i]+i,nextIndex)
    if(i===curIndex){
      // 跳了
      curIndex = nextIndex
      step++
    }
  }
  return step
};
// @lc code=end

