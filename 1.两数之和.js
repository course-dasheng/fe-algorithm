/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  复杂度：
//     数组长度是n  算法大概执行了多少次  时间复杂度是O(n^2)
//     空间复杂度：i和j都是一个普通的数字 O(1)

var twoSum = function(nums, target) {
  let obj = {}
  for(let i=0;i<nums.length;i++){
      let num = nums[i]
      let n = target-num 
      if(num in obj){
          return [i,obj[num]]
      }else{
          obj[n] = i
      }
  }
}


  // for(let i=0;i<nums.length;i++){
  //     for(let j=0;j<nums.length;j++){
  //         if(nums[i]+nums[j]===target && i!==j){
  //             return [i,j]
  //         }
  //     }
  // }