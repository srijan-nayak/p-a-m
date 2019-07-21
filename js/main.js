function handleSizeChange(event) {
	let rows = document.getElementById("grid-rows-input").value;
	let columns = document.getElementById("grid-columns-input").value;
	console.log(`Rows: ${rows}, Columns: ${columns}`);
}

let rowController = document.getElementById("grid-rows-input");
let columnController = document.getElementById("grid-columns-input");

rowController.addEventListener("input", handleSizeChange);
columnController.addEventListener("input", handleSizeChange);
