/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
  if(!head){
    return null
  }
  let arr = []
  while(head){
    let tmp = head.next
    head.next = null
    arr.push(head)
    head = tmp
  }
  arr.sort((a,b)=>a.val-b.val)
  for(let i=0;i<arr.length-1;i++){
    arr[i].next = arr[i+1]
  }
  return arr[0]
};
// @lc code=end

