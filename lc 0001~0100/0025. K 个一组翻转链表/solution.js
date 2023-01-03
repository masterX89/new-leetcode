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

  // [start, end) 迭代
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

var reverseKGroup = function (head, k) {
  if (head === null) return null

  // [start, end) 递归
  const reverse = (start, end) => {
    if (start === end || start.next === end) return start
    let last = reverse(start.next, end)
    start.next.next = start
    start.next = end
    return last
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
