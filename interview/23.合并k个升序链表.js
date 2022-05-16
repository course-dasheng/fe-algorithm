/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function(lists) {




  // // 暴力解法；面试可能不会给塔高的评分，但是至少过了
  // const arr = []
  // for(let i=0;i<lists.length;i++){
  //   let node = lists[i]
  //   while(node){
  //     arr.push(node)
  //     node = node.next
  //   }
  // }
  // console.log(arr)
  // arr.sort((a,b)=>a.val-b.val)
  // let head = cur = arr[0] || null
  // for(let i=1;i<arr.length;i++){
  //   cur.next = arr[i]
  //   cur = cur.next
  // }
  // return head
};

var mergeKLists = function(lists) {
  // @todo 堆
  if(lists.length===0){
    return null
  }
  return mergeLists(lists,0,lists.length-1)
}
//归并排序的思路 二分的思路
function mergeLists(lists,start,end){
  if(start===end){
    return lists[start]
  }
  const mid = start + ((end-start)>>1)
  const leftList = mergeLists(lists,start,mid)
  const rightList = mergeLists(lists,mid+1,end)
  return merge(leftList,rightList)
}

function merge(head1,head2){
  let flag = new ListNode(0)
  let p =flag
  while(head1 && head2){
    if(head1.val<=head2.val){
      p.next = head1
      head1 = head1.next
    }else{
      p.next = head2
      head2 = head2.next
    }
    p = p.next
  }
  p.next = head1 ? head1:head2
  return flag.next
}

// @lc code=end

