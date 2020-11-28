


export class Queue<T> implements Iterable<T>
{
    private arr: T[] = [  ];

    public peek() { return this.arr[0]; }
    public shift() {
        if(this.arr.length === 0) { throw new Error("Error trying to shift from empty queue!"); }
        return this.arr.shift() as T;
    }
    public push(obj: T) { this.arr.push(obj); }

    public size() { return this.arr.length; }
    public isEmpty() { return this.arr.length === 0; }

    [Symbol.iterator](): Iterator<T, any, undefined> { return this.arr[Symbol.iterator](); }
}
