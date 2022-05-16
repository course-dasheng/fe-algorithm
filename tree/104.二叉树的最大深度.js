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
 var maxDepth = function(root) {
  //终止条件
  if(root==null){
      return 0
  }
  // 树最大深度，等于 左子树的深度 和右子树的深度，最大的那一个+1
  return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};










