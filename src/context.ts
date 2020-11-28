import { StackObject } from "./StackObject";


export class StackContext
{
    private dict: Map<string, StackObject> = new Map();

    public addObject(ref: string, obj: StackObject) {
        this.dict.set(ref, obj);
        return this;
    }
    public getObject(ref: string) {
        if(this.dict.has(ref)) { return this.dict.get(ref) as StackObject; }
        throw new Error(`Cannot find reference '${ref}' in context.`);
    }
}
