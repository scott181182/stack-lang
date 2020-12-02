import { StackContext } from "./context";
import { Stack } from "./Stack";
import { Queue } from "./Queue";
import { SourceSymbol } from "./parser";




export function execute(queue: Queue<SourceSymbol>, context: StackContext): Stack<any>
{
    const stack = new Stack<any>();

    for(const sym of queue)
    {
        if(sym.type === "word") {
            const value = context.getObject(sym.value);
            if(typeof value === "function") {
                value(stack);
            } else {
                stack.push(value);
            }
        } else {
            stack.push(sym.value);
        }
    }

    return stack;
}
