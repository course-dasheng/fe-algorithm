/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
// 更像前端的代码
var levelOrder = function(root) {
  let ret = []
  if(root===null){
    return ret
  }
  let queue = [root]
  while(queue.length){
    let curLevel = []
    let len = queue.length
    for(let i=0;i<len;i++){
      let node = queue.shift()
      curLevel.push(node.val)
      // for()
      node.children.forEach(child=>{
        child && queue.push(child)
      })
      // node.left && queue.push(node.left)
      // node.right && queue.push(node.right)
    }
    ret.push(curLevel)
  }
  return ret
};
// @lc code=end

