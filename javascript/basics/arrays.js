const char = "hello world";
const len = char.length;

console.log(len);
const list = [
  [12, 23, 34],
  [45, 56, 67],
  [78, 89, 90],
];
console.log(list[1][1]);
console.log(list);
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const city = data.split(",");
console.log(city);

const numarraay = [0, 1, 2, 3, 4, 5, 6, 7];

for (const num of numarraay) {
  const index = numarraay.indexOf(num);

  console.log("*".repeat(num) + "*".repeat(index));
}
