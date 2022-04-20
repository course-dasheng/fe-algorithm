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
  // 全排列
  let len = nums.length
  let list = []
  let tmp = []
  nums.sort((a,b)=>a-b)
  dfs(0,4,target)
  return list
  function dfs(index,count,target){
    if(count===0 && target===0){
      list.push([...tmp])
      return
    }
    // 剪枝

    if(len-index<count){
      // 数字不够了
      return 
    }
    if(target<count*nums[index]){
      return 
    }
    if(target>count*nums[len-1]){
      return 
    }
    // [1,2,3,4]  100 最大值不够
    // 最小值越界
    for(let i=index;i<len;i++){
      if(i>index && nums[i]===nums[i-1]){
        continue
      }
      tmp.push(nums[i])
      dfs(i+1,count-1,target-nums[i])
      tmp.pop()
    }

  }
};

// // 5数之和
//   // 6数之和


//   // 排序 双指针查找
//   if(nums.lengt<3){
//     return []
//   }
//   let list = []
//   nums.sort((a,b)=>a-b) // n*lgn)
//   for(let j=0;j<nums.length-3;j++){
//     if(j>0 && nums[j]===nums[j-1]){
//       continue
//     }

//     for(let i=j+1;i<nums.length-2;i++){
//       if(i>j+1 && nums[i]===nums[i-1]){
//         continue
//       }
//       let left = i+1
//       let right = nums.length-1
//       while(left<right){
//         let sum = nums[left]+nums[right]+nums[i]+nums[j]
//         if(sum===target){
//           list.push([nums[left],nums[right],nums[i],nums[j]])
//           // 找下一个解
//           while(nums[left]==nums[++left]){}
//           while(nums[right]==nums[--right]){}
//         }else if(sum>target){
//           right--
//         }else if(sum<target){
//           left++
//         }
//       }
//     }

//   }

//   return list

// @lc code=end

