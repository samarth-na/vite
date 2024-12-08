import "../style.css";


const todolist = document.querySelector("#list");

const input = document.querySelector("#input");

const addItem = document.getElementById("add");

const deleteItem = document.getElementById("delete");

addItem.addEventListener("click", () => {
	const listItem = document.createElement("li");
	listItem.textContent = input.value;
	todolist.appendChild(listItem);
});

deleteItem.addEventListener("click", () => {
	todolist.removeChild(todolist.firstChild);
});
