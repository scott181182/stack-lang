import { Queue } from "./Queue";


export type Token = WordToken | StringToken | IntToken;

export interface WordToken { word: string; }
export interface StringToken { value: string; }
export interface IntToken { value: number; }

export class TokenQueue extends Queue<Token>
{
    public addWord(word: string)    { this.push({ word  }); }
    public addString(value: string) { this.push({ value }); }
    public addInt(value: number)    { this.push({ value }); }
}
