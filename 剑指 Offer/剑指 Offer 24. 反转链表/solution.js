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
var reverseList = function (head) {
  let dummy = new ListNode(-1)
  const reverse = (node) => {
    if (node === null || node.next === null) return node
    let last = reverse(node.next)
    node.next.next = node
    node.next = null
    return last
  }
  dummy.next = reverse(head)
  return dummy.next
}
