import { readFileSync } from "fs";
import { tokenize } from "./tokenizer";
import { execute } from "./interpreter";
import { StackContext } from "./context";

function fatal(msg: string) {
    console.error(msg);
    process.exit(1);
}

function main(args: string[])
{
    if(args.length < 1) { fatal("Expected stack filename as an argument"); }
    const filename = args.shift() as string;
    const source = readFileSync(filename, "utf8");

    const tokens = tokenize(source);
    console.log("Tokens: ", tokens);



    const context = new StackContext();
    // execute(tokens, context);
    console.log("Done!");
}
main(process.argv.slice(2));
