class MinStack {
  st: number[] = []
  minSt: number[] = []

  constructor() { }

  push(x: number): void {
    this.st.push(x)
    if (this.minSt.length === 0 || x <= this.minSt[this.minSt.length - 1])
      this.minSt.push(x)
  }

  pop(): void {
    const val = this.st.pop()
    if (val === this.minSt[this.minSt.length - 1])
      this.minSt.pop()
  }

  top(): number {
    return this.st[this.st.length - 1]
  }

  min(): number {
    return this.minSt[this.minSt.length - 1]
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/