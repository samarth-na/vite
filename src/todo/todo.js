import "../../style.css";

class TodoItem {
	title;
	description;
	status;

	constructor(title, description, status) {
		this.title = title;
		this.description = description;
		this.status = status;
	}
}

function getValues() {
	let newItem = new TodoItem();

	newItem.title = document.getElementById("title").value;
	newItem.description = document.getElementById("description").value;
	newItem.status = document.getElementById("status").value;

	return newItem;
}

export async function sendData(dataJson) {
	try {
		const response = await fetch("/api/data", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: dataJson,
		});

		const result = await response.json();
		console.log("Server response:", result);
	} catch (error) {
		console.error("Error sending data:", error);
	}
}
document
	.getElementById("forum-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const newItem = getValues();
		const taskJson = JSON.stringify(newItem);
		console.log(taskJson);
		sendData(taskJson);

		let title = document.getElementById("title");
		title.value = "";
		let description = document.getElementById("description");
		description.value = "";
		let status = document.getElementById("status");
		status.value = "";
	});
