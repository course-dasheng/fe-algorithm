/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let ret = []

  const travese = (node,path=[])=>{
    if(node===null){
      return null
    }
    if(node.left===null && node.right===null){
      // 已经到叶子节点了
      path.push(node.val)
      ret.push(path.join('->'))
    }
    travese(node.left,path.concat(node.val))
    travese(node.right,path.concat(node.val))
  }
  travese(root,[])
  return ret
};
// @lc code=end

