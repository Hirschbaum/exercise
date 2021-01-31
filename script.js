let commands = [1, 4, 1, 3, 2, 3, 2, 4, 1, 0];

//----- boards size
const boardWidth = 4;
const boardHeight = 4;

//----- coordinates for the start position
let x = 2;
let y = 2;

//----- direction, where 0 is North, 90 is East, 180 is South and 270 is West
let direction = 0;

//----- variabel: to change if the coordinates are not on the board
let onTheBoard = true;

//---- checks if the coordinates are still on the board
function checkBoard(width, height, positionX, positionY) {
  if (
    positionX < 0 ||
    positionX >= width ||
    positionY < 0 ||
    positionY >= height
  ) {
    onTheBoard = false;
    console.log([-1, -1]);
  }
  return;
}

function runCommands(arr) {
  for (let i = 0; i < arr.length && onTheBoard; i++) {
    if (
      (direction === 0 && arr[i] === 1) ||
      (direction === 180 && arr[i] === 2)
    ) {
      y--;
      checkBoard(boardWidth, boardHeight, x, y);
    } else if (
      (direction === 0 && arr[i] === 2) ||
      (direction === 180 && arr[i] === 1)
    ) {
      y++;
      checkBoard(boardWidth, boardHeight, x, y);
    } else if (
      (direction === 0 && arr[i] === 3) ||
      (direction === 180 && arr[i] === 4)
    ) {
      direction = 90;
    } else if (
      (direction === 0 && arr[i] === 4) ||
      (direction === 180 && arr[i] === 3)
    ) {
      direction = 270;
    } else if (
      (direction === 90 && arr[i] === 1) ||
      (direction === 270 && arr[i] === 2)
    ) {
      x++;
      checkBoard(boardWidth, boardHeight, x, y);
    } else if (
      (direction === 90 && arr[i] === 2) ||
      (direction === 270 && arr[i] === 1)
    ) {
      x--;
      checkBoard(boardWidth, boardHeight, x, y);
    } else if (
      (direction === 90 && arr[i] === 3) ||
      (direction === 270 && arr[i] === 4)
    ) {
      direction = 180;
    } else if (
      (direction === 90 && arr[i] === 4) ||
      (direction === 270 && arr[i] === 3)
    ) {
      direction = 0;
    } else if (arr[i] === 0) {
      console.log(x, y);
    }
  }
}

runCommands(commands);
