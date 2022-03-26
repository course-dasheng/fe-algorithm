/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 贪心+二分
  // 让序列尽可能增长的慢
  // [1,3,5] 就比[1,4,5]好要一些
  // [1] 
  let n =nums.length
  if(n===0){
    return 0
  }
  let arr = [nums[0]]
  for(let i=0;i<n;i++){
    if(nums[i]>arr[arr.length-1]){
      arr.push(nums[i])
    }else{
      // 找到arr中第一个num[i]大的数组，修改它
      let left = 0
      let right = arr.length-1
      while(left<right){
        let mid = (left+right)>>1
        if(arr[mid]<nums[i]){
          left = mid+1
        }else{
          right = mid
        }
      }
      arr[left] = nums[i]
    }
  }
  return arr.length

  // [0,1,0,3,2,3]
      // [1,1,1,2,1]
  // 选择极值  dp
  // 
  // dp[] 的意思是，在i位置以前的数组，最长递增子序列的长度
  // [1,2,2,3,3,1]
  // let n =nums.length
  // if(n===0){
  //   return 0
  // }
  // let dp = Array(n).fill(1)
  // for(let i=0;i<n;i++){
  //   for(let j=0;j<i;j++){
  //     if(nums[i]>nums[j]){
  //       dp[i] = Math.max(dp[i],dp[j]+1)
  //     }
  //   }
  // }
  // return Math.max(...dp)
};
// @lc code=end

