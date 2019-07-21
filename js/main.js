function handleSizeChange(event) {
	let rows = document.getElementById("grid-rows-input").value;
	let columns = document.getElementById("grid-columns-input").value;
	makeGrid(rows, columns);
	console.log(`Rows: ${rows}, Columns: ${columns}`);
}

function makeGrid(rows, columns) {
	let grid = document.getElementById("grid");
	grid.innerHTML = "";
	for (let i = 0; i < rows; i++) {
		let newRow = document.createElement("tr");
		for (let j = 0; j < columns; j++) {
			let newCell = document.createElement("td");
			newCell.classList.add("grid-cell");
			newRow.appendChild(newCell);
		}
		grid.appendChild(newRow);
	}
}

let rowController = document.getElementById("grid-rows-input");
let columnController = document.getElementById("grid-columns-input");

rowController.addEventListener("input", handleSizeChange);
columnController.addEventListener("input", handleSizeChange);
