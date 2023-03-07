import { ListNode } from '../../types/ListNode.js'
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseList(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1)
  const reverse = (node: ListNode | null): ListNode | null => {
    if (node === null || node.next === null) return node
    const last = reverse(node.next)
    node.next.next = node
    node.next = null
    return last
  }
  dummy.next = reverse(head)
  return dummy.next
}
