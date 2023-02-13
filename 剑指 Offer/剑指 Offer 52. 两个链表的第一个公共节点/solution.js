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
var getIntersectionNode = function (headA, headB) {
  let set = new Set()
  let p = headA
  while (p) {
    set.add(p)
    p = p.next
  }
  p = headB
  while (p) {
    if (set.has(p)) return p
    set.add(p)
    p = p.next
  }
  return null
}
