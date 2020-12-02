import { Queue } from "./Queue";


export type Token = WordToken | StringToken | IntToken;

export interface WordToken   { type: "word",   value: string; }
export interface StringToken { type: "string", value: string; }
export interface IntToken    { type: "int",    value: number; }



export class TokenQueue extends Queue<Token>
{
    public addWord(value: string)   { this.push({ type: "word", value });   }
    public addString(value: string) { this.push({ type: "string", value }); }
    public addInt(value: number)    { this.push({ type: "int", value });    }
}
