import { Cell } from "./cell";
import { CELLS_COUNT, GRID_SIZE } from "./constants";

export class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < CELLS_COUNT; i++) {
            this.cells.push(new Cell(gridElement, (i % GRID_SIZE), Math.floor(i / GRID_SIZE)));                    
        }
    }
}