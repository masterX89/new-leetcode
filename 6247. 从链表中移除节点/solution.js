/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  let res = []
  let st = []
  const dfs = (node, i) => {
    if (node === null) return
    dfs(node.next, i + 1)
    while (st.length !== 0 && st[st.length - 1] <= node.val) st.pop()
    res[i] = st.length !== 0 ? st[st.length - 1] : -1
    st.push(node.val)
  }
  dfs(head, 0)
  let p1 = head
  let p2 = (dummy = new ListNode(-1))
  let i = 0
  while (p1) {
    if (res[i] === -1) {
      p2.next = new ListNode(p1.val)
      p2 = p2.next
    }
    p1 = p1.next
    i++
  }
  return dummy.next
}

removeNodes(
  new ListNode(
    5,
    new ListNode(2, new ListNode(13, new ListNode(3, new ListNode(8))))
  )
)
