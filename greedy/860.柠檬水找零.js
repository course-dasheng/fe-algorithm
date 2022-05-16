/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
//  */
// 1. 给5  直接揣兜里
// 2. 给10  兜里有5 就给他

// 3. 给20  给一个10+5 也可以给5+5+5
//   优先给10块

var lemonadeChange = function(bills) {
  let fiveNum = 0
  let tenNum = 0
  for(let i=0;i<bills.length;i++){
    let bill = bills[i]
    if(bill===5){
      fiveNum += 1
    }else if(bill===10){
      if(fiveNum>0){
        fiveNum -= 1
        tenNum += 1
      }else{
        return false
      }
    }else{
      // 20的情况
      if(tenNum>0 && fiveNum>0){
        fiveNum -= 1
        tenNum -= 1
      }else if(fiveNum>2){
        fiveNum -= 3
      }else{
        return false
      }
    }
  }
  return true
};
// @lc code=end

