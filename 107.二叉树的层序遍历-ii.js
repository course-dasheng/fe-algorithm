/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let ret = [] //结果
  if(root===null){
    return ret
  }
  let queue = [root] //遍历中用的队列
  while(queue.length){
    let len = queue.length //一层的数据量
    let curLevel = []
    while(len>0){
      let node = queue.shift()  
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    ret.unshift(curLevel)
  }
  return ret
};
// @lc code=end

