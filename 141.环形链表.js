/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {

  // let cache = new Set()
  // while(head){
  //     if(cache.has(head)){
  //        return true 
  //     }else{
  //       cache.add(head)  
  //     }
  //     head = head.next
  // }
  // return false

  let slow = head
  let fast = head
  while(fast && fast.next){
      fast = fast.next.next
      slow = slow.next
      if(slow===fast) return true
  }
  return false

};









