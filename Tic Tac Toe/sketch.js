let button;
let w = 150;
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



function setup() {
  
  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // startButton();
  background(220);
  displayGrid();
  // draw_board();
}


function displayGrid(){
  for(let y = 0; y <3; y++){
    for (let x = 0; x<3; x++){
      
      let i;
      let j;
      stroke(0);
      rect(i,j, width/3, height/3);
      i += 100;
      j += 100;

    }
  }
}


// function draw_board() {
//   line(0,w,w*3,w);
//   line(0,w*2,w*3,w*2);
//   line(w,0,w,w*3);
//   line(w*2,0,w*2,w*3);
// }


// function startButton(){
//   button = createButton("Click To Start");
//   button.position(width/2, height/2);
//   button.mousePressed(updateMode);
//   cellWidth = width/3;
//   cellHeight = height/3;
  
// }



 


  
      


