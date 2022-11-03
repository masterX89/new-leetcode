/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let dummy = new ListNode(-1)
  dummy.next = list1
  let p1 = list1
  let p2 = list2
  let cnt = 0
  while (cnt < a - 1) {
    p1 = p1.next
    cnt++
  }
  const p = p1
  while (cnt < b + 1) {
    p1 = p1.next
    cnt++
  }
  p.next = p2
  while (p2 && p2.next) p2 = p2.next
  p2.next = p1
  return dummy.next
}
