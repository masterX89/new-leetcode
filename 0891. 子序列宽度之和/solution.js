/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
  const n = nums.length
  const MOD = 10 ** 9 + 7
  let res = 0
  nums.sort((a, b) => a - b)
  // (2 ** i - 2 ** (n - 1 - i)) * nums[i]
  const pow = new Array(n).fill(0)
  pow[0] = 1
  for (let i = 1; i < n; i++) {
    pow[i] = (2 * pow[i - 1]) % MOD
  }
  for (let i = 0; i < n; i++) {
    res += (((pow[i] - pow[n - 1 - i]) % MOD) * (nums[i] % MOD)) % MOD
  }
  return ((res % MOD) + MOD) % MOD
}
