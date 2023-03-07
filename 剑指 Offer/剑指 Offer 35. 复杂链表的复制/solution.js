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
    const copy = new Node(p.val, p.next, null)
    p.next = copy
    p = p.next.next
  }
  p = head
  while (p) {
    if (p.random) p.next.random = p.random.next
    p = p.next.next
  }
  let cur = dummy
  p = head
  while (p) {
    cur.next = p.next
    p.next = p.next.next
    p = p.next
    cur = cur.next
  }
  return dummy.next
}
