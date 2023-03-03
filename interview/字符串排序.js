// ["B3","D2","F1","A9","D12","A2","C1","Z0","B1"]
// =>
// // ["Z0","B1","C1","F1","A2","D2","B3","A9","D12"]
// 假设有如下字符串“A12”，其中“A”表示数据类型（A-Z），“12”表示数据序号（0-9）。
// 现在需要对一组数据先按照数据序号再按照数据类型进行排序。
// 例如：["B3","D2","F1","A9","D12","A2","C1","Z0","B1"]=>["Z0","B1","C1","F1","A2","D2","B3","A9","D12"]
function sortArr(arr){
  return arr.sort((a,b)=>{
    const [a1,b1] = [a,b].map(v=>Number(v.slice(1)))
    if(a1==b1){
      return a[0].charCodeAt()-b[0].charCodeAt()
    }else{
      return a1 -b1
    }
  })
}
console.log(sortArr(["B3","D2","F1","A9","D12","A2","C1","Z0","B1"]))