/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 // 递归公式
//  遍历到3的时候
// temp = [1]
//   backtrack
//   temp = [1,2]
//     backtrack
//     [1,2,3] 终止
//   temp = [1]
//   temp = [1,3,]
function backtrack(list,temp,nums){
    // 1. 终止条件
    if(temp.length===nums.length){
      return list.push([...temp])
    }
    for(let i =0;i<nums.length;i++){
      // 找到一个不再tmp里的数字
      if(temp.includes(nums[i])){
        continue
      }
      temp.push(nums[i])
      backtrack(list,temp,nums)
      temp.pop()
    }
    // 放进去一个元素
    // 执行递归公式
    // 撤回这个元素
}
var permute = function(nums) {
  let list = []
  backtrack(list,[],nums)

  return list


};
// @lc code=end

