/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function getNum(n){
  let sum = 0
  while(n){
    sum+= (n%10) ** 2
    n = Math.floor(n/10)
  }
  return sum
}
// n =>getNum(n) =>getNum(getNum(n))
// 环形链表
var isHappy = function(n){
  let slow = n
  let fast = n
  if(n===1){
    return true
  }
  while(fast!==1 && getNum(fast)!==1){
    slow = getNum(slow)
    fast = getNum(getNum(fast))
    if(slow===fast){
      return false
    }
  }
  return true
}
var isHappy1 = function(n) {
  let obj = {}
  // let map = new Map()
  while(true){
    if(n in obj){
      return false
    }
    if(n==1) {
      return true
    }
    obj[n] = true
    n = getNum(n)
  }
};
// @lc code=end

