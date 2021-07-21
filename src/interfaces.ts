export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectType = { name: 'nweb', age: 45 };
let object2: ObjectInterface = { name: 'hoge', age: 55 };
