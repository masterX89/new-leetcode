/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head === null) return null

  // [start, end)
  const reverse = (start, end) => {
    let prev = null
    let curr = start
    while (curr !== end) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }

  let end = (start = head)
  for (let i = 0; i < k; i++) {
    if (end === null) return head
    end = end.next
  }
  let last = reverse(start, end)
  start.next = reverseKGroup(end, k)
  return last
}
