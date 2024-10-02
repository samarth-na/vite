import "../../style.css";

const getLocationButton = document.getElementById("getLocation");
const locationDisplay = document.getElementById("locationDisplay");

async function getWeather(latitude, longitude) {
	const apiKey = import.meta.env.VITE_key;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

	let data;

	try {
		const response = await fetch(url); // Fetch the weather data from the API

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`); // Handle errors if the response is not OK
		}

		data = await response.json(); // Parse the JSON data from the response
		console.log(data); // You can log or return the data for further use
	} catch (error) {
		console.error("Failed to fetch weather data:", error); // Handle network errors or API issues
	}
	return data;
}

// Function to get the user's location
//
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				// Success callback
				const latitude = position.coords.latitude; // Get latitude
				const longitude = position.coords.longitude; // Get longitude

				locationDisplay.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
				locationDisplay.classList.add(
					"text-green-500",
					"font-semibold"
				);

				let data = await getWeather(latitude, longitude);
				console.log(data);
				document.createElement("h1").textContent = data.name;
			},

			(error) => {
				// Error callback
				switch (error.code) {
					case error.PERMISSION_DENIED:
						locationDisplay.textContent =
							"User denied the request for Geolocation.";
						break;
					case error.POSITION_UNAVAILABLE:
						locationDisplay.textContent =
							"Location information is unavailable.";
						break;
					case error.TIMEOUT:
						locationDisplay.textContent =
							"The request to get user location timed out.";
						break;
					case error.UNKNOWN_ERROR:
						locationDisplay.textContent =
							"An unknown error occurred.";
						break;
				}

				locationDisplay.classList.add("text-red-500", "font-semibold");
			}
		);
	} else {
		locationDisplay.textContent =
			"Geolocation is not supported by this browser.";
		locationDisplay.classList.add("text-red-500", "font-semibold");
	}
}

// Add click event listener to the button
getLocationButton.addEventListener("click", getLocation);
