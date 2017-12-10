// - p5.js template

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
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

function touchMoved() {
  return false;
}
