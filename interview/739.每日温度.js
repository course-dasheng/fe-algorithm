/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

  let n = temperatures.length
  let res = new Array(n).fill(0)
  let stack = []
  stack.push(0)
  for(let i=1;i<n;i++){
    while(stack.length&&temperatures[i]>temperatures[stack[stack.length-1]]){
      const top = stack.pop()
      res[top] = i-top
    }
    stack.push(i)
  }
  return res
//   [,,,]12
//   // [4,2,4,-1,-1]
//   [4,2,4,-1,-1]
// s [4] 
};
// @lc code=end

