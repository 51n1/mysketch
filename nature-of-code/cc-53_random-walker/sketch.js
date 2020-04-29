// - p5.js template

let pos;
let prev;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  pos = createVector(width/2, height/2);
  prev = pos.copy();

  strokeWeight(1);
}

function draw() {
  stroke(random(0, 100), random(50, 100));

  // point(pos.x, pos.y);
  line(pos.x, pos.y, prev.x, prev.y);

  prev.set(pos);

  let step = p5.Vector.random2D();

  let r = random(100);
  if (r < 1) {
    step.mult(random(25, 100));
    strokeWeight(random(1, 2));
  } else {
    step.setMag(random(2, 3));
    strokeWeight(random(3, 6));
  }

  pos.add(step);
}

class Circle {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.r = 1;
  }

  show() {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
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
