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

const objectt = {
    name: "samna",
    age: 20,
    contry: "india",
    greet() {
        console.log(` hello i am ${this.name}`);
    },
};
console.log(objectt.contry);

numarraay.forEach((num) => {
    const index = numarraay.indexOf(num);
    console.log("*".repeat(num) + "*".repeat(index));
});
for (const num of numarraay) {
    const index = numarraay.indexOf(num);
    console.log("*".repeat(num) + "*".repeat(index));
}
// map method

const newArray = numarraay.map((num) => {
    return "x".repeat(num);
});

console.log("nw ar", newArray);
