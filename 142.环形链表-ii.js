/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
  //     a     --b--*--
  // ---------|        |
  //           ---c----
  // // 2(a+b) =  a+b+圈*n
  // fst走过的路: a+b+n(b+c）
  // slow   2(a+b)
  // a+b = n(b+c)
  // 想找a
  // a = n(b+c)-b
  // a = (n-1)(b+c)+c

  if(head==null){
    return null
  }
  let slow = head
  let fast = head
  while(fast!==null){
    slow = slow.next
    if(fast.next!=null){
      fast = fast.next.next
    }else{
      return null
    }
    if(fast===slow){
      let cur = head
      while(cur!==slow){
        cur = cur.next
        slow = slow.next
      }
      return cur
    }
  }
  return null
};
// @lc code=end

