//Bouncing circles demo



let theCircles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  

}

function draw() {
  background(220);
  moveBalls();
  displayBalls();
  checkForDeath();
}

function mousePressed(){
  spawnBall();
}

function checkForDeath(){
  for (let i = theCircles.length-1; i>=0; i--){
    if(theCircles[i].bounceCount >= 10){
      theCircles.splice(i,1);


    }

  
  }
}

function moveBalls() {
  for (let i = 0; i<theCircles.length; i++){

    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;
    

    //checking for a bounce
    if (theCircles[i].x + theCircles[i].radius > width ||  theCircles[i].x - theCircles[i].radius < 0) {
      theCircles[i].dx *= -1;
      theCircles[i].bounceCount =+1;
    }
  
    if ( theCircles[i].y + theCircles[i].radius > height || theCircles[i].y - theCircles[i].radius < 0){
      theCircles[i].dy *= -1;
      theCircles[i].bounceCount =+1;
    }
  }
}


function displayBalls() {
  for (let ball of theCircles) {
    noStroke();
    fill(ball.theColor);
    circle(ball.x, ball.y, ball.radius*2);
    
  }
}


function spawnBall(){
  
  let ball = {
    x: mouseX,
    y: mouseY,
    dx: random( -5, 5),
    dy: random(-5, 5),
    radius: random(30, 75),
    theColor: color(random(255),random(255),random(255), random (255)),
    bounceCount: 0, 

  };

  theCircles.push(ball);
}
    



