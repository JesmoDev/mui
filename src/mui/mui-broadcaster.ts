export class Broadcaster<T> {
  #listeners = new Set<(data: any) => void>();
  #data: T;

  constructor(data: T) {
    this.#data = data;
  }

  subscribe(listener: (data: any) => void) {
    this.#listeners.add(listener);
    listener(this.#data);
  }

  unsubscribe(listener: (data: any) => void) {
    this.#listeners.delete(listener);
  }

  get data() {
    return this.#data;
  }

  set data(data: T) {
    this.#data = data;
    this.#listeners.forEach((listener) => listener(this.#data));
  }
}
