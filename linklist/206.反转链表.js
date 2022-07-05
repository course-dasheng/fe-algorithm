/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// cur
// head-->b-->c

// b.next = c 取消
// b.next = head  (prev获取遍历的上一个节点)

// c-->b-->head

// prev->cur->next

var reverseList = function(head) {
  if(!head || !head.next){
    return head
  }
  let prev = null
  let cur = head
  while(cur){
    // prev 上一个遍历的cur 也就是上一个节点
    [cur.next,prev,cur] = [prev,cur,cur.next]

    let next = cur.next
    cur.next = prev
    prev = cur //缓存上一次遍历的current
    cur = next //游标向下走
  }
  return prev
};
// @lc code=end

