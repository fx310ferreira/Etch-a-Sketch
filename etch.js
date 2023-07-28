const container = document.querySelector('.container');

let mousePressed = false;

document.addEventListener('mousedown', () => {
    mousePressed = true;
});

document.addEventListener('mouseup', () => {
    mousePressed = false;
});

function color(div) {
    if(mousePressed){
        div.style.backgroundColor = 'black';
    }
}

const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for (let j = 0; j < 16; j++){
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mousemove', () => {
            color(div);
        });
        row.appendChild(div);
    }
}

document.querySelector('#clear').addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    }
    );
});

document.querySelector('#resize').addEventListener('click', () => {
    let size = prompt('Enter a size between 1 and 100');
    if (size > 100) {
        size = 100;
    }
    document.querySelector('.grid').remove();
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 0; j < size; j++){
            const div = document.createElement('div');
            div.classList.add('square');
            div.addEventListener('mousemove', () => {
                color(div);
            });
            row.appendChild(div);
        }
    }
});