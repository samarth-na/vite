const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = arr.map((num) => {
	return "x".repeat(num);
});
for (let num = 0; num < newArray.length; num++) {
	console.log(newArray[num]);

	document.querySelector("#array").innerHTML = `
<h1>${arr[num]}</h1>
`;
}

// document.querySelector("#array").innerHTML = `
// <h1>${arr}</h1>
// `;
