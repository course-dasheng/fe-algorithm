// 二分


// let s = 'hello'

// console.log(s.padStart(10,'0'))

function leftpad(str,length,ch){
  let len = length-str.length+1
  return Array(len).join(ch)+str
}

console.log(leftpad('hello',10,'0'))

// // 二分的思路去优化
// 10个'0' '0' '0' '0' '0' '0' '0' '0' '0' '0'
// Array(10).join
// 或者是字符串直接拼接
// '0'         0
// '00'        1   
// '0000'      0
// '00000000'  1

function leftpad2(str,length,ch){
  let len = length-str.length
  total = ''
  while(true){
    // if(len%2==1){
    if(len & 1){
      total+=ch
    }
    if(len==1){
      return total+str
    }
    ch += ch
    len = len >> 1
    // len = parseInt(len/2)
  }

}
console.log(leftpad2('hello',10,'0'))



console.time('leftpad')
for(let i=0;i<10000;i++){
  leftpad('hello',1000,'0')
}
console.timeEnd('leftpad')

console.time('leftpad2')
for(let i=0;i<10000;i++){
  leftpad2('hello',1000,'0')
}
console.timeEnd('leftpad2')

