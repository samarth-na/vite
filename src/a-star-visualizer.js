import "../style.css";

const graphContainer = document.getElementById("graph-container");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

const numNodes = 100;
let nodes = [];
let edges = [];

let startNode, endNode;
let settingStart = true;
let settingEnd = false;

class Node {
	constructor(id, x, y) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.f = 0;
		this.g = 0;
		this.h = 0;
		this.neighbors = [];
		this.previous = undefined;
		this.element = document.createElement("div");
		this.element.classList.add("node");
		this.element.style.left = `${x}px`;
		this.element.style.top = `${y}px`;
		graphContainer.appendChild(this.element);

		this.element.addEventListener("click", () => {
			console.log(`Node ${this.id} clicked.`);
			if (settingStart) {
				if (startNode) {
					startNode.element.style.backgroundColor = "var(--node-color)";
				}
				startNode = this;
				this.element.style.backgroundColor = "#10B981"; // Emerald 500
				settingStart = false;
				settingEnd = true;
				console.log("Start node set.");
			} else if (settingEnd) {
				if (endNode) {
					endNode.element.style.backgroundColor = "var(--node-color)";
				}
				endNode = this;
				this.element.style.backgroundColor = "#EF4444"; // Red 500
				settingEnd = false;
				console.log("End node set.");
			} else {
				// Allow clicking on nodes to reset their color if they are not start/end
				if (this !== startNode && this !== endNode) {
					this.element.style.backgroundColor = "var(--node-color)";
				}
			}
		});
	}

	addNeighbor(node, weight) {
		this.neighbors.push({ node, weight });
	}
}

function createCityGraph() {
	const containerWidth = graphContainer.offsetWidth;
	const containerHeight = graphContainer.offsetHeight;

	// Create nodes
	for (let i = 0; i < numNodes; i++) {
		const x = Math.random() * (containerWidth - 10); // Adjust for 10px node size
		const y = Math.random() * (containerHeight - 10); // Adjust for 10px node size
		nodes.push(new Node(i, x, y));
	}

	// Create edges
	for (let i = 0; i < numNodes; i++) {
		for (let j = i + 1; j < numNodes; j++) {
			const distance = Math.sqrt(
				Math.pow(nodes[i].x - nodes[j].x, 2) +
					Math.pow(nodes[i].y - nodes[j].y, 2)
			);
			if (distance < 120 && Math.random() > 0.6) {
				const weight = Math.floor(distance / 10);
				nodes[i].addNeighbor(nodes[j], weight);
				nodes[j].addNeighbor(nodes[i], weight);
				edges.push({ from: nodes[i], to: nodes[j], weight });
			}
		}
	}

	// Draw edges
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "100%");
	svg.setAttribute("height", "100%");
	svg.style.position = "absolute";
	svg.style.top = "0";
	svg.style.left = "0";
	svg.style.zIndex = "0"; // Ensure SVG is behind nodes
	graphContainer.appendChild(svg);

	for (const edge of edges) {
		const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
		line.setAttribute("x1", edge.from.x + 5); // Adjust for 10px node size (center is 5)
		line.setAttribute("y1", edge.from.y + 5); // Adjust for 10px node size (center is 5)
		line.setAttribute("x2", edge.to.x + 5); // Adjust for 10px node size (center is 5)
		line.setAttribute("y2", edge.to.y + 5); // Adjust for 10px node size (center is 5)
		line.setAttribute("stroke", "var(--edge-color)");
		svg.appendChild(line);
	}
}

function heuristic(a, b) {
	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

async function aStar(start, end) {
	let openSet = [start];
	let closedSet = [];

	while (openSet.length > 0) {
		let winner = 0;
		for (let i = 0; i < openSet.length; i++) {
			if (openSet[i].f < openSet[winner].f) {
				winner = i;
			}
		}

		let current = openSet[winner];

		if (current === end) {
			let path = [];
			let temp = current;
			path.push(temp);
			while (temp.previous) {
				path.push(temp.previous);
				temp = temp.previous;
			}
			return path;
		}

		openSet = openSet.filter((node) => node !== current);
		closedSet.push(current);

		let neighbors = current.neighbors;
		for (let i = 0; i < neighbors.length; i++) {
			let neighbor = neighbors[i].node;
			let weight = neighbors[i].weight;

			if (!closedSet.includes(neighbor)) {
				let tempG = current.g + weight;

				if (openSet.includes(neighbor)) {
					if (tempG < neighbor.g) {
						neighbor.g = tempG;
					}
				} else {
					neighbor.g = tempG;
					openSet.push(neighbor);
				}

				neighbor.h = heuristic(neighbor, end);
				neighbor.f = neighbor.g + neighbor.h;
				neighbor.previous = current;
			}
		}

		for (let i = 0; i < openSet.length; i++) {
			if (openSet[i] !== start && openSet[i] !== end) {
				openSet[i].element.style.backgroundColor = "#3B82F6"; // Blue 500
			}
		}

		for (let i = 0; i < closedSet.length; i++) {
			if (closedSet[i] !== start && closedSet[i] !== end) {
				closedSet[i].element.style.backgroundColor = "#F59E0B"; // Amber 500
			}
		}

		await sleep(50);
	}

	return []; // No solution
}

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function init() {
	console.log("Initializing graph...");
	graphContainer.innerHTML = ""; // Clear previous graph elements
	nodes = [];
	edges = [];
	startNode = null;
	endNode = null;
	settingStart = true;
	settingEnd = false;
	createCityGraph();
	console.log("Graph initialized.");
}

startBtn.addEventListener("click", async () => {
	if (!startNode || !endNode) {
		alert("Please select a start and end node first.");
		return;
	}

	let path = await aStar(startNode, endNode);
	const svg = graphContainer.querySelector("svg");

	for (let i = 0; i < path.length - 1; i++) {
		const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
		line.setAttribute("x1", path[i].x + 5); // Adjust for 10px node size
		line.setAttribute("y1", path[i].y + 5); // Adjust for 10px node size
		line.setAttribute("x2", path[i + 1].x + 5); // Adjust for 10px node size
		line.setAttribute("y2", path[i + 1].y + 5); // Adjust for 10px node size
		line.setAttribute("stroke", "#10B981"); // Emerald 500
		line.setAttribute("stroke-width", "4");
		svg.appendChild(line);
		await sleep(50);
	}
});

resetBtn.addEventListener("click", init);

init();