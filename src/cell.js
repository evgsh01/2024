export class Cell {
    constructor(gridElement, x, y) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        this.x = x;
        this.y = y;
        gridElement.append(cell);
    }
}