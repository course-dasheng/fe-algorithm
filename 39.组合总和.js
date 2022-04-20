/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 排序的复杂度是n*lgn
  let ret = []
  let path = []
  candidates.sort()
  backtrack(0, 0)
  return ret
  function backtrack(i,sum){
    if(sum>target){
      return //比traget大了
    }
    if(sum===target){
      ret.push([...path])
    }
    for (let j = i; j < candidates.length; j++) {
      // const element = array[j]
      let num = candidates[j]
      if((num+sum)>target){
        continue
      }
      path.push(num)
      sum+= num
      backtrack(j,sum)
      path.pop()
      sum-=num
    }
  }
};
// @lc code=end

