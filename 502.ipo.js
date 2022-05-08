/*
 * @lc app=leetcode.cn id=502 lang=javascript
 *
 * [502] IPO
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

 class Heap{
  constructor(compare){
    this.arr = [0] //忽略0这个索引
    this.compare = compare?compare:(a,b)=>a>b
  }
  get size(){
    return this.arr.length-1
  }
  push(item){
    // 新增元素
    this.arr.push(item)
    this.shiftUp(this.arr.length-1)
  }
  shiftUp(k){
    let {arr,compare,parent} = this
    while(k>1 && compare(arr[k],arr[parent(k)])){
      this.swap(parent(k),k)
      k = parent(k)
    }
  }
  pop(){
    // 弹出堆顶
    if(this.arr.length==1) return null
    this.swap(1, this.arr.length-1)
    let head = this.arr.pop() //删除堆顶
    this.sinkDown(1)
    return head
  }
  sinkDown(k){
    let {arr,compare,left,right,size} = this
    while(left(k)<=size){
      let child = left(k)
      if(right(k)<=size && compare(arr[right(k)],arr[child])){
        child = right(k)
      }
      if(compare(arr[k],arr[child])) {
        return 
      }
      this.swap(k,child)
      k = child //继续向下
    }
  }

  peek(){
    // 获取堆顶元素
    return this.arr[1]
  }
  left(k){
    return k*2
  }
  right(k){
    return k*2+1
  }
  parent(k){
    return Math.floor(k/2)
  }
  swap(i,j){
    [this.arr[i],this.arr[j]] = [this.arr[j],this.arr[i]]
  }
}


var findMaximizedCapital = function(k, w, profits, capital) {
  // topK的题
  let arr = capital.map((c,i)=> [c,profits[i]])
  arr.sort((a,b)=>a[0]-b[0])
  let heap = new Heap((a,b)=>a>b)
  let cur = 0
  while(k>0){

    while(cur<arr.length && arr[cur][0]<=w){
      heap.push(arr[cur][1])
      cur++
    }
    if(heap.size>0){
      w+= heap.pop()
    }else{
      break
    }
    k--
  }
  return w
};

// @lc code=end

