/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map()
  this.capacity = capacity
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let value = this.map.get(key)
    // 重新set，相当于更新到 map最后
    this.map.delete(key) 
    this.map.set(key, value)
    return value
  } else {
    return -1
  }

}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果有，就删了再赋值
  if (this.map.has(key)) {
    this.map.delete(key)
  }
  this.map.set(key, value)
  // 判断是不是容量超了，淘汰机制
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

