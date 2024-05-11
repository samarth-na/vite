const fizzbuzz = () => {
  for (x = 1; x < 100; x++) {
    if (x % 15 === 0) {
      console.log("fizzbuzz");
    }
    if (x % 3 === 0 && x % 5 !== 0) {
      console.log("fizz");
    }
    if (x % 5 === 0 && x % 3 !== 0) {
      console.log("buzz");
    } else {
      console.log(x);
    }
  }
};
// fizzbuzz();

const check = prompt("what num you want");
let x = 0;
const whilebuzz = () => {
  do {
    x++;
    if (x % check === 0) {
      console.log("this shit matches bruh");
    } else {
      console.log(x);
    }
  } while (x < 100);
};

console.log(whilebuzz());
