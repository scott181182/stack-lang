import { BUILTIN_OPS, BUILTIN_P_OPS } from "./builtins";
import { StackOp, StackParityOp } from "./fn";
import { Stack } from "./Stack";


export class StackContext
{
    private dict: Map<string, any> = new Map();
    private funcDict: Map<string, StackOp> = new Map(BUILTIN_OPS);
    private funcParityDict: Map<string, StackParityOp> = new Map(BUILTIN_P_OPS);

    public constructor()
    {

    }

    public addObject(ref: string, obj: any) {
        this.dict.set(ref, obj);
        return this;
    }
    public getObject(ref: string) {
        if(this.dict.has(ref))     { return this.dict.get(ref); }
        if(this.funcDict.has(ref)) { return this.funcDict.get(ref); }
        let cap: RegExpMatchArray | null;
        if(cap = ref.match(/^([^\/]+)\/(\d+)$/)) {
            let f: StackParityOp | undefined;
            if(f = this.funcParityDict.get(cap[1])) {
                return (stack: Stack<any>) => f!(stack, parseInt(cap![2]));
            }
            console.log(cap);
            throw new Error(`Cannot vary the parity of word '${cap[1]}'`)
        }
        throw new Error(`Cannot find reference '${ref}' in context.`);
    }
}
