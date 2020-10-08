let button;
let board = [
  ["", "", ""],
  
  ["", "", ""],
  
  ["", "", ""]
];

let newBoard = [
  ["","",""],
  ["","",""],
  ["","",""],

];

let players = ["X", "O"];

let cellWidth;
let cellHeight;

let w = width/3;
let h = height/3;


function setup() {
  
  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // startButton();
  background(220);
  // displayGrid();
  drawBoard();
}


// function displayGrid(){
//   for(let y = 0; y <3; y++){
//     for (let x = 0; x<3; x++){
      
//       let i;
//       let j;
//       stroke(0);
//       rect(i,j, width/3, height/3);
//       i += 100;
//       j += 100;

//     }
//   }
// }


function drawBoard() {
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);
}


// function startButton(){
//   button = createButton("Click To Start");
//   button.position(width/2, height/2);
//   button.mousePressed(updateMode);
//   cellWidth = width/3;
//   cellHeight = height/3;
  
// }



 


  
      


