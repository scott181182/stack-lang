import { Stack } from "./Stack";



export type StackOp = (stack: Stack<any>) => void;
export type StackParityOp = (stack: Stack<any>, parity: number) => void;

export function mapParity(fns: [string, StackParityOp][], defaultParity: number): [string, StackOp][] {
    return fns.map(([k, v]) => [k, (stack: Stack<any>) => v(stack, defaultParity)])
}
