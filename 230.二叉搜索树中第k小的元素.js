/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = 0
  let stack = []
  while(root || stack.length){
    while(root){
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    count++
    if(count===k){
      return root.val
    }
    root = root.right
  }
};
// @lc code=end

