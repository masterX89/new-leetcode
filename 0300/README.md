# 解题思路

## dp

dp 数组保存了从索引 0 到当前索引的 LIS 的长度

- dp 初始化：1，每一个位置短就是它自己
- 动转方程：dp[i] = max(dp[j])+1，其中 j 的区间为 [0,i)

### 实现

外层循环 i，区间为 [0,len)，i 为 LIS 的末尾

内层循环 j，区间为 [0,i)，如果 `nums[j] < nums[i]` 说明可以更新 dp[i]，`dp[i] = max(dp[i], dp[j] + 1) `
最后返回 `*max_element(dp.begin(),dp.end())` 该方法在 algorithm 中