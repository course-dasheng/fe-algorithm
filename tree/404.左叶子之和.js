/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let leftSum = 0
  function travese(node){
    if(node===null){
      return 
    }
    // left是单独的节点
    let left = node.left
    if(left && !left.left && !left.right){
      leftSum += left.val
    }
    // left有嵌套，走递归
    travese(node.left)
    travese(node.right)
  }
  travese(root) 
  return leftSum
};
// @lc code=end

