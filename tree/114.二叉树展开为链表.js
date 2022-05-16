/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let list = []
  preTravese(root,list)

  for(let i=1;i<list.length;i++){
    const prev = list[i-1] // prev就是root
    const cur = list[i]
    prev.left = null
    prev.right = cur
  }

};

function preTravese(root,list){
  if(root!==null){
    list.push(root)
    preTravese(root.left,list)
    preTravese(root.right,list)
  }
}
// @lc code=end

