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
