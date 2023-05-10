import { Cell } from "./cell.js";
import { CELLS_COUNT, GRID_SIZE } from "./constants.js";

export class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < CELLS_COUNT; i++) {
            this.cells.push(new Cell(gridElement, (i % GRID_SIZE), Math.floor(i / GRID_SIZE)));                    
        }

        this.cellsGroupedByColumn = this.groupCellsByColumn();
    }

    getRandomEmptyCell() {
        const emptySells = this.cells.filter(cell => cell.isEmpty());
        const randomIndex = Math.floor(Math.random() * emptySells.length);
        return emptySells[randomIndex];
    }

    groupCellsByColumn() {
        return this.cells.reduce((groupedCells, cell) => {
            groupedCells[cell.x] = groupedCells[cell.x] || [];
            groupedCells[cell.x][cell.y] = cell;
            return groupedCells;
        }, [])
    }
}