// Dancing Noise Circles
// Made by Shinichiro Ueki
// https://twitter.com/t51n1

var radius;

function setup() {
  createCanvas(windowWidth,windowHeight);
  radius = width > height ? height*0.4 : width*0.4;
}

function draw() {
  for(var i = 0; i < 360; i += 10) {
    var angle = i;
    var x = width/2 + radius * sin(radians(angle));
    var y = height/2 + radius * cos(radians(angle));

    noStroke();
    fill(20, 10);
    ellipse(x, y, 10, 10);
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
}

function touchMoved() {
  return false;
}
