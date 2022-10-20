

//允许的钱是50，100,500，1000,5000
var getMoney = function( number) {
  if(!number) return 0
  const coins =  [5000,1000,500,100,50]
  const obj = { '50': 0, '100': 0, '500': 0, '1000': 0, '5000': 0 }
  // obj通过计算得来通用
  // const obj = coins.reduce((ret,a)=>{ 
  //   ret[a] = 0
  //   return ret
  // },{}) 
  let dp = Array(number+1).fill(Infinity)
  dp[0] = 0
  let selected = Array(number+1)
  selected[0] = {...obj}
  for(const coin of coins){
    for(let j=coin;j<=number;j++){
      // dp[j] 都是Infinity
      if(dp[j-coin]+ 1 < dp[j]){
        dp[j] = dp[j-coin]+ 1
        selected[j] = {...selected[j-coin]}
        selected[j][coin]++
      }
    }
  }

  return dp[number]===Infinity?-1:selected[number]
}


// limit可以限制硬币的数量，比如{5000:0,1000:4,}就是没有5000的，1000的有四个
var getMoney1 = function( number,option={}) {
  if(!number){
    return 0;
  }
  const coins =  [5000,1000,500,100,50]
  const obj = coins.reduce((ret,a)=>{
    ret[a] = 0
    return ret
  },{}) 
  
  let dp = Array(number+1).fill(Infinity)
  dp[0] = 0
  let selected = Array(number+1)
  selected[0] = {...obj}
  const limit = {...obj,...option}
  for(const coin of coins){
    let count = limit[coin]
    for(let i=number;i>=0;i--){
      if(dp[i]!==Infinity){
        // 编译count, 钱数没超过number
        for(let j=1;j<=count &&i+j*coin<=number;j++){
          // 比如dp[100]，2块的硬币有3个
          // 遍历这三个硬币，可以从dp[98]+1, dp[96]+2,dp[94]+3 三个最小值决定
          if(dp[i]+j<dp[i+j*coin]){
            dp[i+j*coin] = dp[i]+j
            selected[i+j*coin] = {...selected[i]}
            selected[i+j*coin][coin]+=j
          }
        }
      }
    }
  }
  return dp[number]===Infinity?-1:selected[number]
}
console.log(getMoney(6200))

const option = { 5000:0,1000:7,100:5}
console.log(getMoney1(6200,option))
// if (import.meta.vitest) {
//   const { it, expect } = import.meta.vitest
//   it.skip('getMoney', () => {
//     expect(getMoney(6200)).toEqual({5000:1,1000:1,500:0,100:2,50:0})
//     const option = { 5000:0,1000:7,100:5}
//     expect(getMoney1(6200),option).toEqual({5000:0,1000:6,100:2})

//   })
// }
