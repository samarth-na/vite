import "./style.css";

// file: main.js

import { sendData } from "./src/apis/sendData.js";

// In another file

async function fetchData() {
    try {
        const response = await fetch("/api/data");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

async function updateApp() {
    const data = await fetchData();
    console.log(typeof data.message);
    const message = data.message;

    if (data) {
        document.querySelector("#app").innerHTML = `
            <div>
                <h1>${message}</h1>
            </div>
        `;
    }
}
updateApp();

sendData();
// vim: ts=4 sts=4 sw=4 et
