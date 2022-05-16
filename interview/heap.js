// top K
// 长度是K的堆
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

let heap = new Heap((a,b)=>a>b) //大顶堆
// heap.push(1.5)
heap.push(3)
heap.push(1)
heap.push(2)
heap.push(4)
// console.log(heap.arr)
console.log(heap.pop())
console.log(heap.size)
console.log(heap.pop())
console.log(heap.pop())
console.log('='.repeat(20))
let heap1 = new Heap((a,b)=>a<b) //小顶堆
heap1.push(3)
heap1.push(1)
heap1.push(2)
heap1.push(4)
console.log(heap1.pop())
console.log(heap1.arr)
console.log(heap1.size)
// [0,  1,2,3,4,5,6]