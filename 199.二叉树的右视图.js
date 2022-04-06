/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  // 每一层最右边的一个值
  let ret = []
  if(root===null){
    return ret
  }
  let queue = [root]

  while(queue.length){
    let len = queue.length
    while(len--){
      let node = queue.shift()
      if(len===0){
        ret.push(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    
  }

  return ret
};
// @lc code=end

