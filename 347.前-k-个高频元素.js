/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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

var topKFrequent = function(nums, k) {
  let map = {}
  nums.map(num=>{
    // map[num] = (num in map?map[num]+1||1
    if(num in map){
      map[num]+=1
    }else{
      map[num] = 1
    }
  })
  // // let arr = [...new Set(nums)]
  // return Object.keys(map).sort((a,b)=>map[b]-map[a]).slice(0,k)

  // 维护一个大小是K的小顶堆，
  let heap = new Heap((a,b)=>map[a]<map[b])
  Object.keys(map).forEach((n,i)=>{
    if(i<k){
      heap.push(n)
    }else if(map[heap.peek()]<map[n]){
      heap.arr[1] = n
      heap.sinkDown(1)
      // heap.push(n)
      // heap.pop()
    }
  })
  return heap.arr.slice(1)

};
// @lc code=end

