/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// [1]
// [2,3]
// 45,6,[,7]
var connect = function(root) {
  if(root===null){
    return root
  }
  let queue = [root]
  while(queue.length){
    let len = queue.length
    while(len--){
      let node = queue.shift()
      if(len>0){
        //不是最后一个
        node.next = queue[0]
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
};
// @lc code=end

