import "../style.css";

const arrayContainer = document.getElementById("array-container");
const startBtn = document.getElementById("start-btn");

let array = [];
let sorted = [];

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateArray() {
	array = [];
	sorted = [];
	for (let i = 0; i < 50; i++) {
		array.push(randomIntFromInterval(5, 100));
	}
	updateVisualization(array);
}

function updateVisualization(
	arr,
	pivotIndex = -1,
	currentIndex = -1,
	partitionBounds = { low: -1, high: -1 }
) {
	arrayContainer.innerHTML = "";
	arr.forEach((value, index) => {
		const bar = document.createElement("div");
		bar.style.height = `${value}%`;
		bar.style.width = "15px";
		bar.classList.add("mx-1");

		if (sorted[index]) {
			bar.classList.add("bg-gray-500");
		} else if (
			index >= partitionBounds.low &&
			index <= partitionBounds.high
		) {
			bar.classList.add("bg-green-300");
		} else {
			bar.classList.add("bg-gray-300");
		}

		if (index === pivotIndex) {
			bar.classList.remove("bg-green-300", "bg-gray-300");
			bar.classList.add("bg-red-500");
		} else if (index === currentIndex) {
			bar.classList.remove("bg-green-300", "bg-gray-300");
			bar.classList.add("bg-blue-500");
		}

		arrayContainer.appendChild(bar);
	});
}

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function partition(arr, low, high) {
	let pivot = arr[high];
	let i = low - 1;

	await updateVisualization(arr, high, -1, { low, high });
	await sleep(100);

	for (let j = low; j < high; j++) {
		await updateVisualization(arr, high, j, { low, high });
		await sleep(50);

		if (arr[j] < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
			await updateVisualization(arr, high, j, { low, high });
			await sleep(50);
		}
	}

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	await updateVisualization(arr, -1, -1, { low, high });
	await sleep(100);

	return i + 1;
}

async function quickSort(arr, low, high) {
	if (low < high) {
		let pi = await partition(arr, low, high);

		await quickSort(arr, low, pi - 1);
		await quickSort(arr, pi + 1, high);
	} else if (low === high) {
		sorted[low] = true;
		await updateVisualization(arr);
		await sleep(50);
	}
}

startBtn.addEventListener("click", async () => {
	generateArray();
	await sleep(500);
	await quickSort(array, 0, array.length - 1);
	for (let i = 0; i < array.length; i++) {
		sorted[i] = true;
	}
	updateVisualization(array);
});

generateArray();
