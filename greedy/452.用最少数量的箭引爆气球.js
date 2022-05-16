/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a,b)=>a[0]-b[0])
  // 气球重叠的部分，一起用一支箭
  let result = 1
  // 开始的部分就是有一支箭
  for(let i=1;i<points.length;i++){
    if(points[i][0] > points[i-1][1]){
      // 者之间没有交叉
      result++
    }else{
      // 尽可能的找重叠层数最多的
      points[i][1] = Math.min(points[i-1][1],points[i][1])
    }
  }
  return result
};
// @lc code=end

