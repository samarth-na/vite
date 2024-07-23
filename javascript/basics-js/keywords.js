// 1. break
let i = 0;

while (i < 5) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(i);
  i++;
}
// Output: 0 1 2


// 2. case
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday"; // dayName is "Wednesday"
    break;
  // ... and so on
}

// 3. catch
try {
  // Code that might throw an error
} catch (error) {
  console.log(error.message); // Handle the error
}

// 4. class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John


// 6. continue
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip the iteration when i is 3
  }
  console.log(i);
}
// Output: 0 1 2 4

// 7. debugger
function sum(a, b) {
  debugger; // Pause execution for debugging
  return a + b;
}

// 8. default
const option = 2;
result = "";
switch (option) {
  case 1:
    result = "Option 1";
    break;
  default:
    result = "Other option"; // Default case
    break;
}

// 9. delete
obj = { a: 1, b: 2 };
delete obj.a; // Delete the 'a' property
console.log(obj); // Output: { b: 2 }

// 10. do...while
count = 0;
do {
  console.log(count); // Executes at least once
  count++;
} while (count < 5);
// Output: 0 1 2 3 4

// 11. else
age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
// Output: You are an adult

// 12. export (ES6 modules)
// file: utils.js
export function sum(a, b) {
  return a + b;
}

// file: main.js
import { sum } from './utils.js';
console.log(sum(2, 3)); // Output: 5

// 13. extends
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`The ${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`The ${this.name} barks.`);
  }
}

dog = new Dog("Labrador");
dog.speak(); // Output: The Labrador barks.

// 14. false

// 15. finally
try {
  // Code that might throw an error
} catch (error) {
  console.log(error.message);
} finally {
  console.log("This will always run");
}

// 16. for
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0 1 2 3 4
}

// 17. function
function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("Alice"); // Output: Hello, Alice

// 18. if
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
// Output: You are an adult

// 19. import (ES6 modules)
// file: utils.js
export function sum(a, b) {
  return a + b;
}

// file: main.js
import { sum } from './utils.js';
console.log(sum(2, 3)); // Output: 5

// 20. in
const obj = { a: 1, b: 2 };
console.log('a' in obj); // Output: true
console.log('c' in obj); // Output: false

// 21. instanceof
class Animal {}
class Dog extends Animal {}

const dog = new Dog();
console.log(dog instanceof Dog); // Output: true
console.log(dog instanceof Animal); // Output: true

// 22. let
let count = 0;
console.log(count); // Output: 0
count = 2;
console.log(count); // Output: 2

// 23. new
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const john = new Person("John", 30);
console.log(john.name); // Output: John

// 24. null
let nothing = null;

// 25. return
function square(n) {
  return n * n;
}
console.log(square(3)); // Output: 9

// 26. super
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`The ${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    super.speak(); // Call the parent method
    console.log(`The ${this.name} barks.`);
  }
}

const dog = new Dog("Labrador");
dog.speak();
// Output:
// The Labrador makes a sound.
// The Labrador barks.

// 27. switch
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  // ... and so on
}
console.log(dayName); // Output: Wednesday

// 28. this
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John");
john.greet(); // Output: Hello, my name is John

// 29. throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message); // Output: Cannot divide by zero
}

// 30. true
let isRaining = true;

// 31. try
try {
  // Code that might throw an error
} catch (error) {
  console.log(error.message);
}

// 32. typeof
console.log(typeof 42); // Output: number
console.log(typeof true); // Output: boolean
console.log(typeof "Hello"); // Output: string
console.log(typeof {}); // Output: object
console.log(typeof null); // Output: object (a known bug)

// 33. var
var count = 0;
console.log(count); // Output: 0
count = 2;
console.log(count); // Output: 2

// 34. void
const result = void (true + false); // result is undefined

// 35. while
let count = 0;
while (count < 5) {
  console.log(count); // Output: 0 1 2 3 4
  count++;
}

// 36. with (not recommended)
const person = { name: "John", age: 30 };
with (person) {
  console.log(name); // Output: John
  console.log(age); // Output: 30
}
