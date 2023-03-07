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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reversePrint(head: ListNode | null): number[] {
  let res: number[] = []
  const helper = (node: ListNode | null): void => {
    if (node === null) return
    helper(node.next)
    res.push(node.val)
  }
  helper(head)
  return res
};