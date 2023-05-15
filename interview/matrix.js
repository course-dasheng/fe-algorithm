// S型打印二维数组
function printMatrix(n, m) {
  let ret = []
  // let obj = Array(String(n*m).length-1).fill(0)
  //             .reduce((val,v,i)=>{
  //               const num = Math.pow(10,i+1)
  //               const index = Math.floor(num/n) -1
  //               val[index] = i+2
  //               return val
  //             },{})
  // console.log(obj)
  for (let i = 0; i < m; i++) {
    let arr = Array(n).fill(0).map((v, k) => k + i * n + 1)
    // const len = String(Math.max(...arr)).length
    // arr = arr.map(v=>String(v).padEnd(len," "))
    ret.push(i & 1 ? arr.reverse() : arr)
  }
  let str = ""
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      str += ret[x][y] + ' '
    }
    str += '\n'
  }
  console.log(str)
}
printMatrix(6, 7)
printMatrix(10, 10)
// printMatrix(34, 34)
