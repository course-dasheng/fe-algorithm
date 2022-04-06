/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
// [3]  1
// [9,20]  2



var levelOrder = function(root) {
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
    ret.push(curLevel)
  }
  return ret
};
// @lc code=end

