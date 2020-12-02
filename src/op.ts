import { Stack } from "./Stack";



export type StackOp = (stack: Stack<any>) => void;
export type StackParityOp = (stack: Stack<any>, parity: number) => void;

const opAdd: StackParityOp = (stack, parity) => {
    let sum = stack.pop();
    while(--parity > 0) {
        sum = stack.pop() + sum;
    }
    stack.push(sum);
}


const MATH_OPS_BINARY: [string, StackParityOp][] = [
    [ "add", opAdd ],
    [ "+",   opAdd ]
];

export const MATH_P_OPS = new Map([
    ...MATH_OPS_BINARY
]);
export const MATH_OPS: Map<string, StackOp> = new Map([
    ...MATH_OPS_BINARY.map(([k, v]) => [k, (stack: Stack<any>) => v(stack, 2)] as const)
])
