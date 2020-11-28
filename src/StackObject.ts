import { StackContext } from "./context";
import { Stack } from "./Stack";


export interface StackObject
{
    eval(stack: Stack<StackObject>, context: StackContext): void;
}
