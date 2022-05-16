/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

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


var MedianFinder = function() {
  // 设计一个大顶堆 小的那一半数字
  this.maxHeap = new Heap((a,b)=>a>b)
  // 一个小顶堆 放大的那一半数字
  this.minHeap = new Heap((a,b)=>a<b)

};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if(!this.maxHeap.size || num<this.maxHeap.peek()){
    this.maxHeap.push(num)
  }else{
    this.minHeap.push(num)
  }
  // 两个堆的平衡
  if(this.maxHeap.size-this.minHeap.size>1){
    this.minHeap.push(this.maxHeap.pop())
  }
  if(this.minHeap.size>this.maxHeap.size){
    this.maxHeap.push(this.minHeap.pop())
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  // if()
  if((this.maxHeap.size+this.minHeap.size)%2===0){
    return (this.maxHeap.peek()+this.minHeap.peek())/2
  }
  return this.maxHeap.peek()
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

