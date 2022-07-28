function checkCashRegister(price, cash, cid) {
  var total = 0
  var change = cash - price
  var arr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
  var result = []
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1]
  }
  if (total < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  }
  if (total == change) {
    return { status: 'CLOSED', change: [...cid] }
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] < change) {
      if (change >= cid[i - 1][1]) {
        result.push(cid[i - 1])
        change = (change - cid[i - 1][1]).toFixed(2)
      } else {
        result.push([
          cid[i - 1][0],
          arr[i - 1] * Math.floor(change / arr[i - 1]),
        ])
        change = (
          change -
          arr[i - 1] * Math.floor(change / arr[i - 1])
        ).toFixed(2)
      }
      if (change == 0) {
        return { status: 'OPEN', change: [...result] }
      }
    }
  }
  return { status: 'INSUFFICIENT_FUNDS', change: [] }
}

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
)
