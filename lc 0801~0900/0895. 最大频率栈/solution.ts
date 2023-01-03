class FreqStack {
  private _freq: Map<number, number> = new Map()
  private _group: Map<number, number[]> = new Map()
  private _maxFreq: number = 0
  constructor() {

  }

  push(val: number): void {
    const freq = this._freq.get(val) || 0
    this._freq.set(val, freq + 1)
    const nextFreq = this._freq.get(val) as number

    if (!this._group.has(nextFreq)) this._group.set(nextFreq, [])
    this._group.get(nextFreq)?.push(val)
    this._maxFreq = Math.max(this._maxFreq, nextFreq)
  }

  pop(): number {
    const maxStack = this._group.get(this._maxFreq) as number[]
    const val = maxStack[maxStack.length - 1]
    const freq = this._freq.get(val) as number

    if (freq - 1 === 0) this._freq.delete(val)
    else this._freq.set(val, freq - 1)
    maxStack.pop()
    if (maxStack.length === 0) {
      // TODO: 为何 -1 即可而不是找到 Math.max this._freq 的内容
      this._maxFreq--
    }


    return val
  }
}

/**
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(val)
* var param_2 = obj.pop()
*/