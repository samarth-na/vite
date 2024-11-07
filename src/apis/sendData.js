export async function sendData() {
	const data = {
		name: "hello from the frontend!",
	};

	try {
		const response = await fetch("/api/data", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const result = await response.json();
		console.log("Server response:", result);
	} catch (error) {
		console.error("Error sending data:", error);
	}
}
