// Dancing Noise Circles
// Made by Shinichiro Ueki
// https://twitter.com/t51n1

var radius;
var rotation;

function setup() {
  createCanvas(windowWidth,windowHeight);
  radius = width > height ? height*0.4 : width*0.4;
  rotation = 0;
}

function draw() {
  background(255);
  beginShape();
  for(var i = 0; i < 360; i += 10) {
    var angle = i - rotation;
    var x = width*0.5 + radius * sin(radians(angle));
    var y = height*0.5 + radius * cos(radians(angle));

    stroke(0);
    noFill();
    vertex(x, y);
    
    ellipse(x, y, 5, 5);
  }
  endShape(CLOSE);
  rotation += 0.5;

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
}

function touchMoved() {
  return false;
}
