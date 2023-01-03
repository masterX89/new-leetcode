/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// 截取再 reverse
var reverseBetween = function (head, left, right) {
  const reverse = (head) => {
    let prev = null
    let curr = head
    while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }

  const dummy = new ListNode(-1)
  dummy.next = head

  let prev = dummy
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }

  let rightNode = (leftNode = prev.next)
  for (let i = 0; i < right - left; i++) {
    rightNode = rightNode.next
  }
  let succ = rightNode.next

  prev.next = null
  rightNode.next = null

  reverse(leftNode)
  prev.next = rightNode
  leftNode.next = succ
  return dummy.next
}

// 一趟扫描穿针引线
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }
  let curr = prev.next
  for (let i = 0; i < right - left; i++) {
    const next = curr.next
    curr.next = next.next
    next.next = prev.next
    prev.next = next
  }
  return dummy.next
}

// 递归
var reverseBetween = function (head, left, right) {
  let succ = null
  const reverseN = (head, n) => {
    if (n === 1) {
      succ = head.next
      return head
    }
    const last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = succ
    return last
  }
  if (left === 1) return reverseN(head, right)
  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
}
