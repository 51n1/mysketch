class Particle {
  constructor() {
    this.x = 100;
    this.y = 99;
  }
  show() {
    point(this.x, this.y);
  }
}

function Ball() {
  this.x = 200;
  this.y = 100;
  // this.show = function() {
  //   ellipse(this.x, this.y, 5);
  // }
}

Ball.prototype.show = function() {
  point(this.x, this.y);
}

let p;
let v;
let b;

p5.Vector.prototype.double = function() {
  this.x *= 2;
  this.y *= 2;
  this.z *= 2;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Particle();
  b = new Ball();

  v = createVector(3, 4);
}

function draw() {
  background(0);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
