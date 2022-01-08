// Demo: https://51n1.github.io/mysketch/{NAME}/

let px = 4;
let w, h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width;
  h = height;
  noStroke();
}

function draw() {
  CreatePixelArt();
  noLoop();
}

function CreatePixelArt(){
  background(0);

  for (let x = 0; x < px; x++){
    for (let y = 0; y < px; y++){
      fill(GetRandomColor());
      let xPos = x * w/px;
      let yPos = y * h/px;
      rect(xPos, yPos, w/px, h/px);
    }
  }
}

function GetRandomColor(){
  return (random(2) > 1 ? 0 : 255);
}

function mousePressed(){
  CreatePixelArt();
}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
