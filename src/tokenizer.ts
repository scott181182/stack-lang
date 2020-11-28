import { TokenQueue } from "./Token";



const enum TokenizerState {
    Skip,
    Word,
    NumberValue,
    StringValue
}

const WHITESPACE = " \f\n\r\t\v\u00A0\u2028\u2029".split("");
const isWhitespace = (c: string) => WHITESPACE.includes(c);
const NUMBERS = "0123456789".split("");
const isNumeric = (c: string) => NUMBERS.includes(c);



export function tokenize(source: string): TokenQueue
{
    const tokens = new TokenQueue();
    let state = TokenizerState.Skip;
    let partial_start = 0;

    for(let index = 0; index < source.length; index++)
    {
        const c = source.charAt(index);

        switch(state)
        {
            case TokenizerState.Skip:
                if(isWhitespace(c)) { continue; }
                else if(c === '"') {
                    state = TokenizerState.StringValue;
                    partial_start = index + 1;
                } else if(isNumeric(c)) {
                    state = TokenizerState.NumberValue;
                    partial_start = index;
                } else {
                    state = TokenizerState.Word;
                    partial_start = index;
                }
                break;
            case TokenizerState.Word:
                if(isWhitespace(c)) {
                    tokens.addWord(source.substring(partial_start, index));
                    state = TokenizerState.Skip;
                }
                break;
            case TokenizerState.NumberValue:
                if(isWhitespace(c)) {
                    tokens.addInt(parseInt(source.substring(partial_start, index), 10));
                    state = TokenizerState.Skip;
                }
                break;
            case TokenizerState.StringValue:
                if(c === '"') {
                    tokens.addString(source.substring(partial_start, index));
                    state = TokenizerState.Skip;
                }
                break;
        }
    }

    switch(state)
    {
        case TokenizerState.Word:        tokens.addWord(source.substring(partial_start)); break;
        case TokenizerState.NumberValue: tokens.addInt(parseInt(source.substring(partial_start), 10)); break;
        case TokenizerState.StringValue: tokens.addString(source.substring(partial_start)); break;
    }
    return tokens;
}
