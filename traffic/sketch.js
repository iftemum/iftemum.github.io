//  Traffic Light
// Iftemum AL Raian
// Septermber 23rd
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let whichColorToDisplay = "green";
let lastLightSwitchTime = 0;
let greenLightDuration = 4000;
let yellowLightDuration = 1000;
let redLightDuration = 4000;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawOutLineOfLights();
  showCorrectLight();
  chooseWhichLightToDisplay();


}


function drawOutLineOfLights(){
  //box
  rectMode(CENTER);
  fill("black");
  rect(width/2, height/2, 75,200, 10);
  
  //lights
  fill("white");
  
  
  circle(width/2 , height/2 - 65 , 50);

  circle(width/2,height/2, 50);

  circle(width/2, height/2 + 65 , 50);


}

function showCorrectLight(){
  if (whichColorToDisplay=== "red"){
    fill("red");
    circle(width/2, height/2 -65, 50);

  }

  else if (whichColorToDisplay === "yellow"){
    fill("yellow");
    circle(width/2, height/2, 50);
  }
  else if(whichColorToDisplay==="green"){
    fill("green");
    circle(width/2, height/2+65, 50);
  }

}

function chooseWhichLightToDisplay(){
  if( whichColorTodisplay === "green" && millis() > lastLightSwitchTime + greenLightDuration) {

      whichColorToDisplay = "yellow";
      lastLightSwitchTime = millis();

    }
    else if ( whichColorTodisplay === "yellow" && millis() > lastLightSwitchTime + greenLightDuration) {

      whichColorToDisplay = "red";
      lastLightSwitchTime = millis();
  }
  else if ( whichColorTodisplay === "red" && millis() > lastLightSwitchTime + greenLightDuration) {

    whichColorToDisplay = "green";
    lastLightSwitchTime = millis();
}










