/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  const travese = (root1,root2)=>{
    if(root1===null&&root2===null){
      return true
    }
    if(root1===null||root2===null){
      return false
    }
    if(root1.val===root2.val){
      return travese(root1.left,root2.right) && travese(root1.right,root2.left)
    }
    return false
  }

  return travese(root.left,root.right)
};
// @lc code=end

