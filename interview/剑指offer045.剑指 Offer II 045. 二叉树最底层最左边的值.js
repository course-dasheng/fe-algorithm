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
// dfs 
var findBottomLeftValue1 = function (root) {
  if (root === null) {
    return
  }
  let res, maxLevel = 0
  dfs(root, 1)
  return res && res.val
  function dfs(node, level) {
    if (!node) return
    if (level > maxLevel) res = node, maxLevel = level
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}
 // dfs 二叉树的层序遍历
var findBottomLeftValue = function (root) {
  let res
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len ; i++) {
      const node = queue.shift()
      if (i === 0) res = node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
}

