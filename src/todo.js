import "../style.css";

const todolist = document.querySelector("#list");

const output = document.getElementById("output");

const input = document.querySelector("#input");

const addItem = document.getElementById("add");

const deleteItem = document.getElementById("delete");

input.addEventListener("keydown", (event) => {
	// Check if the 'Enter' key was pressed
	if (event.key === "Enter" || event.keyCode === 13) {
		event.preventDefault();

		output.textContent = `${input.value}`;
	}
});

addItem.addEventListener("click", () => {
	let listItem = document.createElement("li");
	listItem.textContent = input.value;
	todolist.appendChild(listItem);
});

deleteItem.addEventListener("click", () => {
	todolist.removeChild(todolist.firstChild);
});
