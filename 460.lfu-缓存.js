/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.size = capacity
  this.values = new Map() // key:value
  this.times = new Map()  // key：次数
  // 找到当前次数最小的key
  // useMap更新的逻辑，其实vue的响应式依赖管理很像
  this.useMap = new Map() //次数：key: set(key)
  this.min =0 //最小次数是多少
};
LFUCache.prototype.updateCount = function(key){
  let time = this.times.get(key)
  let useSet = this.useMap.get(time)
  if(this.min===time && useSet.size===1){
    //当前次数是最小值 并且这个次数只有一个key
    this.min +=1
  }
  // time 10=>11
  time+=1
  useSet.delete(key)
  useSet = this.useMap.get(time) || new Set()
  useSet.add(key)
  this.useMap.set(time,useSet)
  this.times.set(key,time)
}
/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if(this.values.has(key)){
    this.updateCount(key)
    return this.values.get(key)
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if(this.size===0){
    return
  }
  if(this.values.has(key)){
    //值存在，不需要淘汰
    this.values.set(key,value)
    this.updateCount(key)
  }else{
    //值不存在，需要看size 
    if(this.size === this.values.size){
      // 满了需要淘汰
      let minSet = this.useMap.get(this.min)
      let minKey = minSet.keys().next().value
      minSet.delete(minKey)
      
      this.values.delete(minKey)
      this.times.delete(minKey)
    }
    // 更新
    this.values.set(key,value)
    // 这个数据出现了1次
    useSet = this.useMap.get(1) || new Set()
    useSet.add(key)
    this.useMap.set(1,useSet)
    this.times.set(key,1)
    this.min =1 
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

