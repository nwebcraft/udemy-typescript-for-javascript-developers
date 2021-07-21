export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('エラー');
  console.log({ result });
} catch (e) {
  console.log({ e });
}

let foo: void = undefined;
let bar: never = undefined;
let piyo: never = null;
let baz: never = error('only me');
