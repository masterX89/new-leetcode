/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let left = head
  const helper = (node) => {
    // base case
    if (node === null) return true
    let res = helper(node.next)
    res &= left.val === node.val
    left = left.next
    return res
  }
  return helper(head)
}

// O(n) O(1)
var isPalindrome = function (head) {
  const reverse = (head) => {
    let prev = null
    let curr = head
    while (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }

  let slow = (fast = head)
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  if (fast !== null) slow = slow.next
  let p = (left = head)
  let q = (right = reverse(slow))
  while (right !== null) {
    if (left.val !== right.val) return false
    p = left
    left = left.next
    right = right.next
  }
  p.next = reverse(q)
  return true
}
