/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null
  let slow = head.next
  let fast = head.next.next
  while (fast && fast.next && fast !== slow) {
    slow = slow.next
    fast = fast.next.next
  }
  if (!fast || !fast.next) return null
  slow = head
  while (fast !== slow) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
