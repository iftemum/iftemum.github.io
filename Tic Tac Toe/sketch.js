
let board = [
  [0,0,0],
  
  [0,0,0],
  
  [0,0,0]
];
let w;
let turn = -1;
let isWinner = false;

let newBoard = [
  ["","",""],
  ["","",""],
  ["","",""],

];

function setup(){
  createCanvas(400,400);
  w = width/3;
}

function draw() {
  background(220);
  displayBoard();
}


function displayBoard() {
  for(let i = 0; i<3; i ++){
    for (let j = 0; j<3; j++){
      rect(i*w, j*w, w,w);
    }

  }


} 

function mousePressed(){
  if (isWinner){
    return;
  }
  turn *= -1;

  if(board[int(mouseX/w)][int(mouseY/w)]== 0) {
    map [int(mouseX/3)][int(mouseY/2)]== turn;
  }
  if ( turn == 1){
    fill(color("black"));
  }
  if (turn == -1){
    fill (color("red"));
  }

}
  
      


