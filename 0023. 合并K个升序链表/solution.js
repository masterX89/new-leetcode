/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const mergeLists = (lists, lo, hi) => {
  if (lo === hi) return lists[lo]
  const mid = lo + ((hi - lo) >> 1)
  let p1 = mergeLists(lists, lo, mid)
  let p2 = mergeLists(lists, mid + 1, hi)
  let p = (dummy = new ListNode())
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }
  p.next = p1 ? p1 : p2
  return dummy.next
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null
  return mergeLists(lists, 0, lists.length - 1)
}
