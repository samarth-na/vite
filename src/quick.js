function randomarray(length, max) {
	var arr = new Array(length);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = Math.floor(Math.random() * max);
	}
	return arr;
}

const quickSort = function sort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[0];
	const left = arr.filter((x) => x <= pivot);
	const right = arr.filter((x) => x > pivot);

	let newarr = [...left, ...right];

	console.log(newarr);
	console.log(" ");

	return [...sort(left), ...sort(right)];
};

// Example usage
const sortedArray = quickSort(randomarray(20, 100));
console.log(sortedArray);
