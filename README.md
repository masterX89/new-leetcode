# new-leetcode

## 归并相关题目

|                             力扣                             |                难度                |
| :----------------------------------------------------------: | :--------------------------------: |
| [912. 排序数组](https://leetcode.cn/problems/sort-an-array/) | <font color='Orange'>medium</font> |
| [23. 合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/) |   <font color='red'>hard</font>    |
| [315. 计算右侧小于当前元素的个数](https://leetcode.cn/problems/count-of-smaller-numbers-after-self/) |   <font color='red'>hard</font>    |
|  [493. 翻转对](https://leetcode.cn/problems/reverse-pairs/)  |   <font color='red'>hard</font>    |
| [327. 区间和的个数](https://leetcode.cn/problems/count-of-range-sum/) |   <font color='red'>hard</font>    |



1. 在后序遍历的时候，如果 root 的结果就是最终结果，那么递归时候的 res 就可以作为最终结果返回。而如果每个 node 都需要参与比较，例如树的最大直径，那么就需要借助外部变量
