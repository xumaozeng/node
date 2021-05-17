/**
 * LRU缓存机制
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    const val = this.map.get(key);
    if (val === undefined) return -1;

    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key, val) {
    if (this.map.has(key)) this.map.delete(key);

    this.map.set(key, val);

    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}
