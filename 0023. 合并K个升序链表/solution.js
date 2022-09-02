/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const mergeLists = (lists, start, end) => {
    if (start === end) return lists[start]
    const mid = start + ((end - start) >> 1)
    const leftList = mergeLists(lists, start, mid)
    const rightList = mergeLists(lists, mid + 1, end)
    return merge(leftList, rightList)
  }
  const merge = (p1, p2) => {
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
  if (lists.length === 0) return null
  return mergeLists(lists, 0, lists.length - 1)
}
