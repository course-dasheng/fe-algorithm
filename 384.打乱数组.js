/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  //计算打乱后的
  let arr = [...this.nums]
  for(let i=arr.length-1;i>=0;i--){
    // 10
    // 0~9
    const ri = Math.floor(Math.random()*(i+1))
    ;[arr[i],arr[ri]] = [arr[ri],arr[i]] 
  }
  return arr
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

