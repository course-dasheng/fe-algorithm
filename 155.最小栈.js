/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
  this.stack = []
  this.mins = [Infinity]
};
// 1,2,3 
/** 
 * @param {number} val
 * @return {void}
 */
function last(arr){
  return arr[arr.length-1]
}
MinStack.prototype.push = function(val) {
  let item = Math.min(last(this.mins),val)
  this.stack.push(val)
  this.mins.push(item)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.mins.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return last(this.mins)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

