/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // [1,0,-1,0,-2,2]
  let list = []
  let len = nums.length
  let tmp = []
  nums.sort((a,b)=>a-b)
  dfs(0,4,target)
  return list
  function dfs(index,count,target){
    if(count===0 && target===0){
      // @todo  
      list.push([...tmp])
      return 
    }
    // 剪枝
    if(len-index<count){
      return
    }
    // 2 3 2
    if(target<count*nums[index]){
      return 
    }
    if(target>count*nums[len-1]){
      return
    }
    for(let i =index;i<len;i++){
      if(i>index && nums[i]===nums[i-1]){
        continue
      }
      tmp.push(nums[i])
      dfs(i+1, count-1, target-nums[i])
      tmp.pop()
    }
  }

  // nSum
};
// @lc code=end

