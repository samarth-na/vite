import "../style.css";

const charsh = document.getElementById("chars");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//const updateText = async () => {
//	let chars = [];
//	let line = "";
//	for (let i = 0; i < 10; i++) {
//		line += "x";
//		message.innerHTML = i;
//		chars.push(line);
//		await sleep(1000);
//	}
//	chars.forEach((char) => {
//		console.log(char);
//	});
//};
//
//updateText();

function randomarray(length, max) {
	var arr = new Array(length);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = Math.floor(Math.random() * max);
	}
	return arr;
}

async function bubblesort(arr) {
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] < arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;

				await sleep(1);

				//list.innerHTML = arr;

				console.log(arr);

				let chars = [];
				for (const i of arr) {
					let line = "";
					for (let j = 0; j < i; j++) {
						line += "";
					}
					line += "";
					chars.push(line);
					console.log(line);
				}
				console.log(chars);
				charsh.innerHTML = "";
				chars.forEach((item) => {
					let listItem = document.createElement("li"); // Create <li> element
					listItem.textContent = item; // Set the text of the <li>
					charsh.appendChild(listItem); // Append <li> to the <ul>
				});

				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}

bubblesort(randomarray(64, 70));
