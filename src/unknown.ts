export {};

const kansu = (): number => 46;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnkown = numberUnknown + 10;
  console.log(sumUnkown);
}
