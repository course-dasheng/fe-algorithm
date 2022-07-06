/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//   if(p===null&&q===null){
//     return true
//   }
//   if(p===null||q===null){
//     return false
//   }
//   if(p.val!==q.val){
//     return false
//   }
//   return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
// };
// var isSameTree = function(p,q){
//   function travese(p,q){
//     if(p===null&&q===null){
//       return true
//     }
//     if(p===null||q===null){
//       return false
//     }
//     let left = travese(p.left,q.left)
//     let right = travese(p.right,q.right)
//     if(p.val===q.val &&left && right){
//       return true
//     }
//     return false
//   }
//   return travese(p,q)
// }

// var isSameTree = function(p,q){
//   return JSON.stringify(p)===JSON.stringify(q)
// }
var isSameTree1 = function(p,q){
  // 迭代
    if(p===null&&q===null){
      return true
    }
    if(p===null||q===null){
      return false
    }
    let queueP = [p]
    let queueQ = [q]
    while(queueP.length && queueQ.length){
      const nodeP = queueP.shift()
      const nodeQ = queueQ.shift()
      if(nodeP.val!==nodeQ.val){
        return false
      }
      if(nodeP.left && nodeQ.left){
        queueP.push(nodeP.left)
        queueQ.push(nodeQ.left)
      }else if(nodeP.left || nodeQ.left){
        return false
      }

      if(nodeP.right && nodeQ.right){
        queueP.push(nodeP.right)
        queueQ.push(nodeQ.right)
      }else if(nodeP.right || nodeQ.right){
        return false
      }
    }
    return true
}
// @lc code=end

