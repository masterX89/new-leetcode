/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let fast = head
  let slow = head
  while (k > 0) {
    fast = fast.next
    k--
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
