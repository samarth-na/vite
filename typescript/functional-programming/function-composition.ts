// deno-lint-ignore-file
console.log("hlo");
type increment = (x: number) => number;

const increment: increment = (x) => x + 1;

const tostring = (x: number) => `${x}`;
console.log(increment(10));
