import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.querySelector(".game-board");

const grid = new Grid(gameBoard);

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));



function setupInputOnce() {
    window.addEventListener('keydown', handleInput, {once: true});
}



function handleInput(event) {
    switch (event.key) {
        case "ArrowUp":
            moveUp();
        case "ArrowDown":

        case "ArrowLeft":

        case "ArrowRight":

        default:
            setupInputOnce();
            return;
    }

    setupInputOnce();
}

function moveUp() {
    slideTiles(grid.cellsGroupedByColumn);
}

function slideTiles(groupedCells) {
    groupedCells.forEach(group => slideTilesInGroup(group));
}

function slideTilesInGroup(group) {
    for (let i = 1; i < group.lenght; i++) {
        if(group[i].isEmpty()) continue;
        
        const cellWithTile = group[i];

        let targetCell;
        let j = i -1;
        while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) {
            targetCell = group[j];
            j--;
        }

        if (!targetCell) continue;

        if(targetCell.isEmpty()) {
            targetCell.linkTile(cellWithTile.linkedTile);
        } else {
            targetCell.linkTileForMerge(cellWithTile.linkedTile);
        }

        cellWithTile.unlinkTile();
    }
}