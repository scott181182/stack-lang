import { TokenQueue } from "./Token";
import { Queue } from "./Queue";



export type SourceSymbol = WordSymbol | StringSymbol | IntSymbol;

export interface WordSymbol   { type: "word", value: string; }
export interface StringSymbol { type: "string", value: string; }
export interface IntSymbol    { type: "int", value: number; }


export function parse(tokens: TokenQueue): Queue<SourceSymbol>
{
    const queue = new Queue<SourceSymbol>();

    for(const tok of tokens) {
        queue.push(tok);
    }

    return queue;
}
