/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(!nums.length){
    return null
  }
  // 二叉搜索树的中序遍历，就是升序列表
  // 数组中间的位置，可以作为树的根节点
  const mid = Math.floor(nums.length/2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0,mid))
  root.right = sortedArrayToBST(nums.slice(mid+1))
  return root
};
// @lc code=end

