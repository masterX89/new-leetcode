class CQueue {
  st1: number[] = []
  st2: number[] = []

  constructor() { }

  appendTail(value: number): void {
    this.st1.push(value)
  }

  deleteHead(): number {
    if (this.st2.length === 0) {
      while (this.st1.length > 0) {
        const val = this.st1.pop()
        this.st2.push(val as number)
      }
    }
    const res = this.st2.pop()
    return res || -1
  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/