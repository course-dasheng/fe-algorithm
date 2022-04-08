/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
// push   pop()

// push shift
var MyQueue = function() {
  // []  1  
  // [3,2]2 3 
  this.stackIn = []
  this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(this.stackOut.length){
    return this.stackOut.pop()
  }
  while(this.stackIn.length){
    this.stackOut.push(this.stackIn.pop())
  }
  return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  let x = this.pop()
  this.stackOut.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.stackIn.length && !this.stackOut.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

