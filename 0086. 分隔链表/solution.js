/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let p1 = (dummy1 = new ListNode())
  let p2 = (dummy2 = new ListNode())
  let p = head
  while (p) {
    if (p.val < x) {
      p1.next = p
      p1 = p1.next
    } else {
      p2.next = p
      p2 = p2.next
    }
    // 断开链接防止成环
    let temp = p.next
    p.next = null
    p = temp
  }
  p1.next = dummy2.next
  return dummy1.next
}
