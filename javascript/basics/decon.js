const list = [1, 2, 3, 4, 4, 56, 7, 8, 3, 65, 56, 34, 23, 21];
const [a ,,, ...rest] = list;
console.log(rest);

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
