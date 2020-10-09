// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [];
let cellWidth; 
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/ grid[0].length;
  cellHeight = height / grid.length;
}

function draw() {
  background(220);
  displayGrid();

}

function generateGrid(){
  for (let i = 0; i <20; i++){
    grid.push([]);
    for (let j = 0; j<20; j++){
      if (random(100)< 50 ){
        
        grid[i].push(1);
      }
      else {
        grid[i].push(1);
      }
      }
      }
    }
  
  
function displayGrid() {
  for (let y=0; y<grid.length; y++) {
      for (let x=0; x<grid[y].length ; x++) {
        if (grid[y][x] === 0) {
          fill("black");
        }
          else {
            fill("white");
          }
    
          rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
        }
      }
    }