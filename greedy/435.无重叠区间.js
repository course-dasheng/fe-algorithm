/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b)=>a[1]-b[1])
  let count = 1
  let end = intervals[0][1]
  for(let i=1;i<intervals.length;i++){
    let inv = intervals[i]
    if(inv[0]>=end){
      end = inv[1]
      // 额外的区间
      count++
    }
  }
  return intervals.length-count
};
// @lc code=end

