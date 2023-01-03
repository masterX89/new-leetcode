/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 暴力解法 - 额外空间 - Set
var getIntersectionNode = function (headA, headB) {
  let p1 = headA
  let p2 = headB
  let set = new Set()
  while (p1) {
    set.add(p1)
    p1 = p1.next
  }
  while (p2) {
    if (set.has(p2)) return p2
    p2 = p2.next
  }
  return null
}

// 将两条链表逻辑连接
var getIntersectionNode = function (headA, headB) {
  let p1 = headA
  let p2 = headB
  while (p1 !== p2) {
    if (p1 === null) p1 = headB
    else p1 = p1.next
    if (p2 === null) p2 = headA
    else p2 = p2.next
  }
  return p1
}
