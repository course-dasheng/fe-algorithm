/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
  let ret = []
  if(root===null){
    return ret
  }
  let queue = [root]
  while(queue.length){
    let len = queue.length
    let maxVal = queue[0].val
    while(len--){
      let node = queue.shift()
      maxVal = maxVal>node.val ?maxVal:node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    ret.push(maxVal)
  }
  return ret
};
// @lc code=end

