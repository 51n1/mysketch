// Dancing Noise Circles
// Made by Shinichiro Ueki
// https://twitter.com/t51n1

var radius;

function setup() {
  createCanvas(windowWidth,windowHeight);
  radius = width > height ? height*0.4 : width*0.4;
}

function draw() {
  beginShape();
  for(var i = 0; i < 360; i += 10) {
    var angle = i;
    var x = width*0.5 + radius * sin(radians(angle));
    var y = height*0.5 + radius * cos(radians(angle));

    stroke(0);
    noFill();
    vertex(x, y);
  }
  endShape(CLOSE);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
}

function touchMoved() {
  return false;
}
