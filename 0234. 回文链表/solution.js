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
// O(n) O(n)
var isPalindrome = function (head) {
  let list = []
  let curr = head
  while (curr) {
    list.push(curr.val)
    curr = curr.next
  }
  let left = 0
  let right = list.length - 1
  while (left < right) {
    if (list[left] !== list[right]) return false
    left++
    right--
  }
  return true
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
