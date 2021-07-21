export {};

type Mojiretsu = string;

const fooString: string = 'こんちは';
const barString: Mojiretsu = 'Hellow';

console.log(fooString);
console.log(barString);

type Profile = { name: string; age: number };

const example1: Profile = { name: 'hoge', age: 62 };

type Profile2 = typeof example1;
