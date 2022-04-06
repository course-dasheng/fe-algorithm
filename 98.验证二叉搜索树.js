/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let prev = -Infinity
  function travese(node){
    if(node===null){
      return true
    }
    let left = travese(node.left)
    if(prev>=node.val){
      // 破坏了递增的逻辑
      return false
    }
    prev = node.val
    let right = travese(node.right)
    return left && right
  }
  return travese(root)
};
// @lc code=end

