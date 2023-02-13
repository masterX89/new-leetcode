/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  const dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy
  let p = head
  while (p) {
    if (p.val === val) {
      prev.next = p.next
      break
    }
    prev = prev.next
    p = p.next
  }
  return dummy.next
}
