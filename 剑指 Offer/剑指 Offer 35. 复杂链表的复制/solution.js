/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let dummy = new Node(-1)
  // 1 -> 2 -> 3
  // 1 -> 1' -> 2 -> 2' -> 3 -> 3'
  let p = head
  while (p) {
    let copyNode = new Node(p.val, p.next, null)
    p.next = copyNode
    p = copyNode.next
  }
  // copy random
  p = head
  while (p) {
    if (p.random !== null) {
      p.next.random = p.random.next
    }
    p = p.next.next
  }
  // 链表分离
  p = head
  let cur = dummy
  while (p) {
    cur.next = p.next
    p.next = cur.next.next
    cur = cur.next
    p = p.next
  }
  return dummy.next
}
