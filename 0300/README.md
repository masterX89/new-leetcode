# 解题思路

## dp

dp 数组保存了从索引 0 到当前索引的 LIS 的长度

- dp 初始化：1，每一个位置短就是它自己
- 动转方程：dp[i] = max(dp[j])+1，其中 j 的区间为 [0,i)

### 实现

外层循环 i，区间为 [0,len)，i 为 LIS 的末尾

内层循环 j，区间为 [0,i)，如果 `nums[j] < nums[i]` 说明可以更新 dp[i]，`dp[i] = max(dp[i], dp[j] + 1) `
最后返回 `*max_element(dp.begin(),dp.end())` 该方法在 algorithm 中

## 贪心 + 二分

### 一步步解析版本

```c++
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int len = 1, n = (int)nums.size();
        if (n == 0) {
            return 0;
        }
        vector<int> d(n + 1, 0);
        d[len] = nums[0];
        for (int i = 1; i < n; ++i) {
            if (nums[i] > d[len]) {
                d[++len] = nums[i];
            } else {
                int l = 1, r = len, pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
                while (l <= r) {
                    int mid = (l + r) >> 1;
                    if (d[mid] < nums[i]) {
                        pos = mid;
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
                d[pos + 1] = nums[i];
            }
        }
        return len;
    }
};
```

Case: [0,8,4,12,2]

{} 表示修改了 d 中的某个值, () 表示当前的 d 序列

Init:

len = 1, n = 5

d: [0,0,0,0,0,0] -> [0,({0}),0,0,0,0]

算法 i: [1,n) -> [1,5)

i = 1: 

​	nums[i]: 8, d[len]: 0 -> len = 2, d[len] = nums[i] -> [0,(0,{8}),0,0,0]

i = 2:

​	nums[i]: 4, d[len]: 8 -> 二分 -> 去寻找 pos 修改点 -> 如果 nums[i] 足够小到小于 d 中所有数字 -> 此时应该修改 d[1] 即 d[pos+1]

​	init: 

​		pos = 0 (offset 为 +1)

​		二分范围: [1,len] -> [1,2] -> 即 d 序列 (0, 8) 内容

​		循环出口: l > r -> l 到了 r 的右侧

​	二分:

​		l = 1, r = 2, mid = 1: d[mid] < nums[i] -> pos = 1, l = 2

​		l = 2, r = 2, mid = 2: d[mid] > nums[i] -> r = 1

​		退出循环

​	pos = 1 -> d[pos + 1] = nums[i] -> [0,(0,{4}),0,0,0]

i = 3:

​	nums[i]: 12, d[len]: 4 -> len = 3, d[len] = nums[i] -> [0,(0,4,{12}),0,0]

i = 4:

​	nums[i]: 2, d[len]: 12 -> 二分

​	二分:

​		l = 1, r = 3, mid = 2: d[mid] > nums[i] -> r = 2

​		l = 1, r = 2, mid = 1: d[mid] < nums[i] -> pos = 1, l = 2

​		l = 2, r = 2, mid = 2: d[mid] > nums[i] -> r = 1

​		退出循环

​	pos = 1 -> d[pos + 1] = nums[i] -> [0,(0,{2},12),0,0]

最后得到 len = 3

### 总结

Case: [0,8,4,12,2]

[0,({0}),0,0,0,0] -> [0,(0,{8}),0,0,0] -> [0,(0,{4}),0,0,0] -> [0,(0,4,{12}),0,0] -> [0,(0,{2},12),0,0]

pos: 当前的 d[len] >= nums[i]，找出 j 使得 d[j] >= nums[i]，并将 nums[i] 赋值给 d[j]



注意: d 序列存储的并非是最长递增子序列，而是对应 len 的末尾最小值，以 [0,8,4,12,2] 为例，在贪心时候，如果约束：

- 最长递增子序列的 len 为 1 时，[0,(0,2,12),0,0] -> d[1] = 0
- 最长递增子序列的 len 为 2 时，[0,(0,2,12),0,0] -> d[2] = 2
- 最长递增子序列的 len 为 3 时，[0,(0,2,12),0,0] -> d[3] = 12

即贪心算法根本没有保留子序列，它只是保留了对应长度的最后一个数字

纯贪心算法：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return []

  let n = nums.length
  let d = new Array(n + 1).fill(0)
  let len = 1
  d[len] = nums[0]
  for (let i = 1; i < n; i++) {
    if (d[len] < nums[i]) {
      d[++len] = nums[i]
    } else {
      let j
      for (j = 1; j <= len; j++) {
        if (d[j] >= nums[i]) {
          break
        }
      }
      d[j] = nums[i]
    }
  }
  return len
}

```

纯贪心解法的时间复杂度依旧是 O(n^2)

但是我们可以证明 d 是随着 len 单调递增的，然后利用 单调性去优化 查找 j 的时间复杂度即可，使用二分让查找复杂度变成 O(logn)

证明当 j < i 时, d[j] < d[i]

证明：

题设为 d[i] 表示一个长度为 i 的 LIS 的末尾**最小**元素

假设存在 j < i 时，d[j] >= d[i]

此时创造一个长度为 j 的 LIS 命名为序列 B，

该序列 B 由长度为 i 的 LIS 从末尾删除 i-j 个元素所构成

并设序列 B 的末尾元素为 x

由 LIS 特性可知: x < d[i]

又由假设可知: x < d[i] <= d[j] 即 x < d[j]

因此存在一个长度为 j 的序列 B, 其末尾元素 x < d[j]

与题设相矛盾, 得证 d[i] 具有单调性

```js
// 贪心+二分
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return []

  let n = nums.length
  let d = new Array(n + 1).fill(0)
  let len = 1
  d[len] = nums[0]
  for (let i = 1; i < n; i++) {
    if (d[len] < nums[i]) {
      d[++len] = nums[i]
    } else {
      let l = 1
      let r = len
      let j = 1
      while (l <= r) {
        let mid = ((r - l) >> 1) + l
        if (d[mid] < nums[i]) {
          // 二分开区间
          j = mid + 1
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      d[j] = nums[i]
    }
  }
  return len
}

```









