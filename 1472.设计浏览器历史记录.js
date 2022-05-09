/*
 * @lc app=leetcode.cn id=1472 lang=javascript
 *
 * [1472] 设计浏览器历史记录
 */

// @lc code=start
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.stack = [homepage]
  this.cur = 0
};
// a,b,c,d
// b
/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.stack.length = this.cur+1
  this.stack.push(url)
  this.cur++
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.cur = Math.max(0,this.cur-steps)
  return this.stack[this.cur]
  // 当前是第3个，你要后退1步，到第二个
  // 后退5步，到第0个
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.cur = Math.min(this.stack.length-1,this.cur+steps)
  return this.stack[this.cur]
  // 总共有5个，你在第二个，前进10步
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end

