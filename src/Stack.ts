


export class Stack<T>
{
    private arr: T[] = [  ];

    public peek() { return this.arr[this.arr.length - 1]; }
    public pop() {
        if(this.arr.length === 0) { throw new Error("Error trying to pop from empty stack!"); }
        return this.arr.pop() as T;
    }
    public push(obj: T) { this.arr.push(obj); }

    public size() { return this.arr.length; }
    public isEmpty() { return this.arr.length === 0; }
}
