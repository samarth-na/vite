import { dvdrental, connect_db, dissconnect_db } from "./pg.js";

async function fetchData() {
	await connect_db(dvdrental);
	const result = await dvdrental.query("SELECT * FROM actor ;");

	console.log("Query result:", result.rows);

	await dissconnect_db(dvdrental);
}
fetchData();
