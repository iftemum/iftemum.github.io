// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theSparks= [];
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);

  for(let i= theSparks.length-1; i >= 0; i --){
    if( theSparks[i].isDead()){
      theSparks.splice(i, 1);
    }
    else{
      theSparks[i].move();
      theSparks[i].display();

    }

  }

}

class Spark{
  constructor(x, y,dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = 255;
    this.radius = 5;
    this.gravity = 0.2;

  }
  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2);
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;
    this.alpha -= 3;
  }
  isDead(){
    return this.alpha <= 0;

  }
}

function mousePressed(){

  for (let i = 0; i<100; i ++){
    let somespark = new Spark(mouseX,mouseY);
    theSparks.push(somespark);
  }
}