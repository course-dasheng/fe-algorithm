/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

  let calc = {
    '+':(a,b)=>a+b,
    '-':(a,b)=>b-a,
    '*':(a,b)=>a*b,
    '/':(a,b)=>(b/a)|0,
  }
  let stack = []

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i]
    if(t in calc){
      // 增删改查
      stack.push(calc[t](stack.pop(),stack.pop()))
    }else{
      // 数组
      stack.push(Number(t))
    }

  }
  return stack.pop()

  // let tmp 
  // for (let i = 0; i < tokens.length; i++) {
  //   const t = tokens[i]
  //   // switch()
  //   if(t==='+'){
  //     tmp = stack.pop()+stack.pop()
  //     stack.push(tmp)
  //   }else if(t==='-'){
  //     tmp = stack.pop()
  //     tmp = stack.pop()-tmp
  //     stack.push(tmp)
  //   }else if(t==='*'){
  //     tmp = stack.pop()*stack.pop()
  //     stack.push(tmp)

  //   }else if(t==='/'){
  //     tmp = stack.pop()
  //     tmp = getNum(stack.pop()/tmp)
  //     stack.push(tmp)
  //   }else{
  //     stack.push(Number(t))
  //   }
  //   // + - * / 
  //   // else 数字

  // }
  // // （2+1）*3
  // return stack.pop()
  // 2,1 +，3 * 
};
// function getNum(num){
//   return num | 0 //位运算
//   return Number(num.toString().split('.')[0])
// }
// @lc code=end

