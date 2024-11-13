import "../../style.css";

function getValues() {
    let task = {
        title: "",
        description: "",
        status: "",
    };
    task.title = document.getElementById("title").value;
    task.description = document.getElementById("description").value;
    task.status = document.getElementById("status").value;

    return task;
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

function handleFormSubmit(event) {
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
}

document
    .getElementById("forum-form")
    .addEventListener("submit", handleFormSubmit);
