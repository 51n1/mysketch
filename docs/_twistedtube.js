var x, y;
var speed;
var angle;
var maxSpeed = 5;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5canvas");
  select("#p5output").html("- Please move your mouse or finger.");
  
  colorMode(HSB, 100);
  rectMode(CENTER);
  background(90);
  frameRate(15);
  select("body").style("background-color", color(90));
  
  x = width / 2;
  y = height / 2;
  speed = 0;
  angle = 0;
}

function draw() {
  var acc = (mouseY - (height/2));
  speed += acc * 0.01;
  if(speed < -maxSpeed) speed = -maxSpeed;
  if(speed > maxSpeed) speed = maxSpeed;
  
  var ang = ((width/2) - mouseX);
  angle += ang * 0.05;
  
  x += speed * sin(radians(angle));
  y += speed * cos(radians(angle));
  
  loopWorld();
  
  stroke(70, 30);
  if(ang >= 0) fill(85, 99, 99, min(abs(ang)/4, 30));
  if(ang < 0) fill(45, 90, 99, min(abs(ang)/4, 30));
  ellipse(x, y, max(abs(acc), 50), max(abs(acc), 50));
}

function loopWorld() {
  if(x < 0) x = width + x;
  if(x > width) x = x - width;
  if(y < 0) y = height + y;
  if(y > height) y = y - height;
}
