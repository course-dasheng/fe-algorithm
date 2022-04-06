/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
var recoverTree = function(root) {

  let arr = []
  let first 
  let second

  function travese(node){
    if(node===null){
      return 
    }
    travese(node.left)
    arr.push(node)
    travese(node.right)
  }
  travese(root)
  
  for(let i=0;i<arr.length-1;i++){
    if(arr[i].val>arr[i+1].val){
      // 出错了
      // 找到两个值，移动位置
      if(!first){
        //第一次遇见
        first = arr[i]
      }
      second = arr[i+1]
    }
  }
  let tmp = first.val
  first.val = second.val
  second.val = tmp
};
// @lc code=end

