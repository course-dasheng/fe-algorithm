// 排序

const arr = require('./arr')
let arrary = require('./arr')
// arr.sort((a,b)=>a-b)
console.log(arrary)

function bubbleSort(arr){
  // 每个人和右边人比较，如果你比他高，就交换位置，否则就不动
  let len = arr.length-1
//  O(n^2)
  for(let j=0;j<len;j++){
    for(let i=0;i<len-j;i++){
      if(arr[i]>arr[i+1]){
        // let tmp = arr[i]
        // arr[i] = arr[i+1]
        // arr[i+1] = tmp
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
      }
    }
  }
  return arr
}

// console.log('冒泡排序',bubbleSort(arrary))


// 给数组找一个标志位，比如我，所有人都给我比个头，比我高的，站我右边
// 比我矮的，占我左边
// O(n * lgn)

function quickSort(arr){
  if(arr.length<2){
    return arr
  }
  let flag = arr[0]
  let left = []
  let right = []
  for(let i=1;i<arr.length;i++){
    if(arr[i]>flag){
      right.push(arr[i])
    }else{
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(flag,quickSort(right))
}
// console.log('快速排序',quickSort(arrary))

// 原地快排
//         i->   <-j
//   [d,a,b,c,e,f,g,h]
//   i找到一个比e打的
//   j找到一个比e晓得
//   i和j的值交换一下位置
//   到最后i和j遇见

空间复杂度变成了O1
function quick1(arr,start,end){
  // 双指针
  let init = start
  let flag = arr[init]
  start++
  while(start<=end){
    while(arr[end]>flag){
      end--
    }
    while(arr[start]<flag){
      start++ 
    }
    if(start<end){
      [arr[start],arr[end]] = [arr[end],arr[start]]
      start++
      end--
    }
  }
  [arr[init],arr[start-1]] = [arr[start-1],arr[init]]
  return start
}
function quickSort1(arr,start,end){
  if(start<end){
    let index = quick1(arr,start,end) //标志位的值
    quickSort1(arr,start,index-1)
    quickSort1(arr,index,end)
  }
  return arr
}

console.log('原地快速排序',quickSort1(arrary,0,arrary.length-1))

// arr.sort()

