const numarraay = [1, 2, 3, 4, 5];

for (const num of numarraay) {
  const value = num;
  for (let i = 1; i <= value; i++) {
    process.stdout.write("x");
  }
  process.stdout.write("\n");
}
