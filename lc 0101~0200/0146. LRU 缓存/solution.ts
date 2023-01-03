class LRUCache {
  private _cap: number
  private _cache: Map<number, number> = new Map()

  constructor(capacity: number) {
    this._cap = capacity
  }

  get(key: number): number {
    if (!this._cache.has(key)) return -1
    this.makeRecently(key)
    return this._cache.get(key) as number
  }

  put(key: number, value: number): void {
    if (this._cache.has(key)) {
      this._cache.set(key, value)
      this.makeRecently(key)
      return
    }
    if (this._cache.size >= this._cap) {
      const oldestKey = this._cache.keys().next().value
      this._cache.delete(oldestKey)
    }
    this._cache.set(key, value)
  }

  makeRecently(key: number) {
    const val = this._cache.get(key) as number
    this._cache.delete(key)
    this._cache.set(key, val)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

