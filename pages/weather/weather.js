const apiKey = import.meta.env.VITE_key;

async function getWeather(city) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

	let data;
	let weather;
	try {
		const response = await fetch(url);
		// Fetch the weather data from the API

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
			// Handle errors if the response is not OK
		}
		console.log(response);

		data = await response.json();
		weather = data.weather[0].description;
		// Parse the JSON data from the response and extract the weather description

		console.log(" ");
	} catch (error) {
		console.error("Failed to fetch weather data:", error);
		// Handle network errors or API issues
	}

	console.log(weather);
	return data;
}
getWeather("new york");
