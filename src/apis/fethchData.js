// frontend/src/main.js
async function fetchData() {
	try {
		const response = await fetch("/api/data");
		if (!response.ok) throw new Error("Network response was not ok");
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

fetchData();
