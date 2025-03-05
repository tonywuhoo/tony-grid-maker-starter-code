let numRows = 0;
let numCols = 0;
let colorSelected = "SELECT";

function addR() {
    let grid = document.getElementById("grid");
    let row = document.createElement("tr");

    for (let i = 0; i < numCols || i === 0; i++) {
        let cell = document.createElement("td");
        cell.onclick = function() {
            colorCell(cell);
        };
        row.appendChild(cell);
    }

    grid.appendChild(row);
    numRows++;

    if (numCols === 0) numCols = 1;
}

function addC() {
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByTagName("tr");

    if (numRows === 0) {
        addR();
    } else {
        for (let i = 0; i < rows.length; i++) {
            let cell = document.createElement("td");
            cell.onclick = function() {
                colorCell(cell);
            };
            rows[i].appendChild(cell);
        }
    }

    numCols++;
}

function removeR() {
    let grid = document.getElementById("grid");
    if (numRows > 0) {
        grid.removeChild(grid.lastElementChild);
        numRows--;
        if (numRows === 0) numCols = 0; // Reset column count if no rows exist
    }
}

function removeC() {
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByTagName("tr");

    if (numCols > 0) {
        for (let i = 0; i < rows.length; i++) {
            rows[i].removeChild(rows[i].lastElementChild);
        }
        numCols--;
        if (numCols === 0) numRows = 0; // Reset row count if no columns exist
    }
}

function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
}

function colorCell(cell) {
    if (colorSelected !== "SELECT") {
        cell.style.backgroundColor = colorSelected;
    }
}

function fillU() {
    let cells = document.getElementsByTagName("td");
    for (let cell of cells) {
        if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = colorSelected;
        }
    }
}

function fillAll() {
    let cells = document.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = colorSelected;
    }
}

function clearAll() {
    let cells = document.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = "";
    }
}
