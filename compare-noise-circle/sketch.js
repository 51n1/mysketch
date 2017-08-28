// Comparison of Randomness by Circle Shapes
// Shinichiro Ueki
// https://twitter.com/t51n1

var x, y;
var diameter;
var doff;
var imgsize;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //imgsize = width > height ? height*0.45 : width*0.45;
  imgsize = width*0.33;
  x = imgsize*0.5;
  y = imgsize*0.5;
  doff = 0;
  background(200);
}

function draw() {
  push();
  translate(width*0.25-imgsize*0.5, height*0.5-imgsize*0.5);
  diameter = map(noise(doff), 0, 1, imgsize*0.1, imgsize);
  fill(255);
  rect(0,0,imgsize,imgsize);
  stroke(0);
  noFill();
  ellipse(x, y, diameter, diameter);
  doff += 0.02;
  pop();

  push ();
  translate(width*0.75-imgsize*0.5, height*0.5-imgsize*0.5);
  diameter = map(random(1), 0, 1, imgsize*0.1, imgsize-1);
  fill(255);
  rect(0,0,imgsize,imgsize);
  stroke(0);
  noFill();
  ellipse(x, y, diameter, diameter);
  pop();

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
}

function touchMoved() {
  return false;
}
