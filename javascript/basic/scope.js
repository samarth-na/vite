const square = (x) => {
  return x * x;
};
console.log(square(3));

const a = 10;
const outer = () => {
  const b = 20;
  const inner = () => {
    const c = 30;
    console.log(a, b, c);
  };
  inner();
};
outer();

const Outer = () => {
  let counter = 0;
  const inner = () => {
    for (counter ; counter < 10; counter++) {
      counter++;
    }
    console.log(counter);
  };
  inner();
};
Outer();
