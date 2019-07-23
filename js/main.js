function handleSizeChange(event) {
	let rows = document.getElementById("grid-rows-input").value;
	let columns = document.getElementById("grid-columns-input").value;
	// Make a new grid with the current row and column input vales
	makeGrid(rows, columns);
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

function paintTarget(event) {
	target = event.target;
	color = document.getElementById("brush-color-input").value;
	// Update the background color of the clicked element with
	// the color inout value
	target.style.backgroundColor = color;
}

let rowController = document.getElementById("grid-rows-input");
let columnController = document.getElementById("grid-columns-input");
let canvas = document.getElementById("grid");
let clearButton = document.getElementById("clear-button");

rowController.addEventListener("input", handleSizeChange);
columnController.addEventListener("input", handleSizeChange);
canvas.addEventListener("mousedown", paintTarget);

// Handling size change will make a fresh grid of the same size,
// effectivly functioning like a clear function
clearButton.addEventListener("click", handleSizeChange);
