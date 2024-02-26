class Container {
  static store = new Map();

  static add(key, value) {
    if (this.store.has(key)) {
      throw Error('Dependency already added.');
    }

    this.store.set(key, value);
  }

  static get(key) {
    return this.store.get(key);
  }
}

export default Container;
