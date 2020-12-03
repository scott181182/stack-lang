import { StackOp, StackParityOp, mapParity } from "../fn";



const opAdd: StackParityOp = (stack, parity) => {
    let sum = stack.pop();
    while(--parity > 0) {
        sum = stack.pop() + sum;
    }
    stack.push(sum);
}
const opSub: StackParityOp = (stack, parity) => {
    if(parity < 2) { return; }
    let subtrahend = stack.pop();
    while(--parity > 1) {
        subtrahend = stack.pop() + subtrahend;
    }
    let minuend = stack.pop();
    stack.push(minuend - subtrahend);
}
const opMul: StackParityOp = (stack, parity) => {
    let product = stack.pop();
    while(--parity > 0) {
        product = stack.pop() * product;
    }
    stack.push(product);
}
const opDiv: StackParityOp = (stack, parity) => {
    if(parity < 2) { return; }
    let divisor = stack.pop();
    while(--parity > 1) {
        divisor = stack.pop() * divisor;
    }
    let dividend = stack.pop();
    stack.push(dividend / divisor);
}

const opMod: StackOp = (stack) => {
    const right = stack.pop();
    const left = stack.pop();
    stack.push(left % right);
}


const MATH_P_OPS_BINARY: [string, StackParityOp][] = [
    ["add", opAdd],
    ["+",   opAdd],
    ["sub", opSub],
    ["-",   opSub],
    ["mul", opMul],
    ["*",   opMul],
    ["div", opDiv],
    ["/",   opDiv],
];

export const MATH_P_OPS = new Map([
    ...MATH_P_OPS_BINARY
]);
export const MATH_OPS: Map<string, StackOp> = new Map([
    ...mapParity(MATH_P_OPS_BINARY, 2),
    ["mod", opMod],
    ["%",   opMod],
])
