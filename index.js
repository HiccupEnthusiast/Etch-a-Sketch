let grid = document.querySelector('.grid');
const resetBtn = document.querySelector('button.restart');

let x = 16;
let y = 16;

resetBtn.addEventListener('click', () => {
    y = Math.abs(Number(prompt("Insert number of rows: ", '16')));
    x = Math.abs(Number(prompt('Insert number of columns: ', '16')));
    if (isNaN(x) || isNaN(y)){
        alert("Invalid input!");
    }else if (x > 100 || y > 100) {
        alert("The grid can't be that big!");
    } else {
        clearGrid();
        createGrid(x, y);
    }    
});

createGrid(x, y);

function createGrid(rows, columns) {
    for (let i = 1; i <= rows; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        for (let j = 1; j <= columns; j++) {
            let createdCell = document.createElement('div');
            createdCell.className = 'cell';
            createdCell.id = `${i} ${j}`;
            createdCell.addEventListener('mouseover', toggleColor);
            column.appendChild(createdCell);
        }
        grid.appendChild(column);
    };    
};

function clearGrid() {
    const container = document.querySelector('.container');
    
    grid.remove();
    grid = document.createElement('div');
    grid.className = "grid";
    container.appendChild(grid);
}

function toggleColor() {
    this.classList.toggle("color-toggle");
}