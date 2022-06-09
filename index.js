const grid = document.querySelector('.grid');

createGrid(16, 16);

function createGrid(rows, columns) {
    for (let i = 1; i <= rows; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        for (let j = 1; j <= columns; j++) {
            let createdCell = document.createElement('div');
            createdCell.className = 'cell';
            createdCell.id = `${i} ${j}`;
            column.appendChild(createdCell);
        }
        grid.appendChild(column);
    }    
};