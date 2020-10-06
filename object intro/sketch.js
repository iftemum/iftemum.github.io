// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let richard; 
let april;

function setup() {
  createCanvas(windowWidth, windowHeight);
  richard = new Walker(width/2, height/2, "red");
  april = new Walker ( 200, 100, " green");
}

function draw() {
  

  richard.move();
  april.move();
  richard.display();
  april.display();
}

class Walker {
  constructor(x,y,theColor){
    this.x = x; 
    this.y = y; 
    this.color = theColor;
  }
  move(){
    let choice = random(100);
    if (choice< 33){
      //
      this.x -= 1;
    }
    else if (choice < 50){
      this.x += 1;
    }
    else if (choice<75){
      this.y -= 1;
    }
    else{
      this.y += 1;
    }
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, 5);
  }

}
