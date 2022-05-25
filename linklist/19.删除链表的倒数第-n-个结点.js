/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */


// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
// 100 10
// // 先走10个节点
// 然后fast slow一起走

  // let dummy = new ListNode(null,head)
  let dummy = {
    next:head
  }
  let slow = fast = dummy
  while(n--){
    fast = fast.next
  }
  while(fast.next!==null){
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
};
// @lc code=end

