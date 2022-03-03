/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let ret = 0
  nums.forEach(num=>{
      ret ^=  num
  })
  return ret
};