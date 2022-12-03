// https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou

// 二叉搜索树：右》根》左
// 后序遍历 左->右->根

// 主要的思路就是找到左右树的分解，递归判断大小

var verifyPostorder = function (postorder) {
  if (postorder.length <= 2) return true
  // 最后一个是root节点
  const root = postorder.pop()
  let i = 0
  // 找到左右的分界点
  while (postorder[i] < root) {
    i++
  }
  let right = postorder.slice(i)
  let left = postorder.slice(0, i)
  // 右边当中所有节点都大于root
  const rightResult = right.every((item) => item > root)
  //递归
  return rightResult && verifyPostorder(left) && verifyPostorder(right)
}
