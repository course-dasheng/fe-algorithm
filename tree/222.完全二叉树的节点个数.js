/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  function travese(node){
    if(node===null){
      return 0
    }
    let leftNum = travese(node.left)
    let rightNum = travese(node.right)
    return leftNum + rightNum +1
  }
  return travese(root)
};
// @lc code=end

