# 解题思路

对于每个 Node，判断其是否在 (low,high) 区间内，⚠️ 应为**开区间**

递归出口:

- `node == nullptr` 返回 `true`
- `val <= low || val >= high` 返回 `false`

递归表达式: `dfs(node -> left, low, node -> val) && dfs(node -> right, node -> val, high)`

- 往左子树走，左子树内的所有节点均应 **小于** `node.val`，因此更新 `high` 的值
- 往右子树走，右子树内的所有节点均应 **大于** `node.val`，因此更新 `low` 的值
