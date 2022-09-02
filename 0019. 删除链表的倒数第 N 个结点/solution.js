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
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1)
  dummy.next = head

  const findFromEnd = (head, n) => {
    let p2 = (p1 = head)
    for (let i = 0; i < n; i++) {
      p1 = p1.next
    }
    while (p1) {
      p1 = p1.next
      p2 = p2.next
    }
    return p2
  }

  const p = findFromEnd(dummy, n + 1)
  p.next = p.next.next
  return dummy.next
}
