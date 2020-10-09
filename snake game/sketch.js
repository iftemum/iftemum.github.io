// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let cellWidth;
let cellHeigth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateScreen();
  cellWidth = width/ grid[0].length;
  cellHeigth = height/grid.length;
}

function draw() {
  background(220);

}

function displayGrid(){

}

function generateScreen(){
  for(let y = 0; y<grid.length; y++){
    for (let x = 0; x<grid[y].length; x ++){
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
}