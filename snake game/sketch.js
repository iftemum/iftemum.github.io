// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let snake = [];
let grid = [];
let cellWidth;
let cellHeigth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/ grid[0].length;
  cellHeigth = height/grid.length;
  grid = generateEmptyGrid(20);
}

function draw() {
  background(220);
  displayGrid();
  
}



function generateEmptyGrid(gridSize) {
  let grid = [];
  for (let i=0; i<gridSize; i++) {
    grid.push([]);
    for (let j=0; j<gridSize; j++) {
      grid[i].push(0);
    }
  }
  return grid;
}

function displayGrid() {
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {

      
      rect(cellWidth*x, cellHeigth*y, cellWidth, cellHeigth);
    }
  }
}

class Snake {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  move(){
    
  }
}


