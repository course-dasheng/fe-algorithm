/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

// {
//   val,
//   next,
// }

var LinkNode = function(val,next){
  this.val = val
  this.next = next
}
var MyLinkedList = function() {
  this.head = null //head节点
  this.tail = null //尾节点
  this.size = 0    //长度
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index){
  if(index<0 || index>=this.size){
    return -1
  }
  let cur = new LinkNode(0,this.head) //虚拟节点
  while(index-- >=0){
    cur = cur.next
  }
  return cur

}
MyLinkedList.prototype.get = function(index) {
  if(index<0||index>=this.size) {
    return -1
  }
  return this.getNode(index).val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new LinkNode(val,this.head)
  this.head = node
  this.size++
  if(!this.tail){
    this.tail = node
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new LinkNode(val,null)
  this.size++
  if(this.tail){
    this.tail.next = node
    this.tail = node
    return 
  }
  this.tail = node
  this.head = node
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index>this.size) {
    return
  }
  if(index<=0){
    this.addAtHead(val)
    return
  }
  if(index===this.size){
    this.addAtTail(val)
    return
  }
  let node = this.getNode(index-1)
  node.next = new LinkNode(val,node.next)
  this.size++
  // 其他情况
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index<0 || index>=this.size){
    return 
  }
  if(index===0){
    this.head = this.head.next
    this.size--
    return
  }
  let node = this.getNode(index-1)
  node.next = node.next.next
  if(index===this.size-1){
    this.tail = node
  }
  this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

