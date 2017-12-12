// - 9.7: Drawing Object Trails
// - p5.js Tutorial by Daniel Shiffman
let particles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(200);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

class Particle {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.r = 16;
    this.history = [];
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    for (let i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2, 2);
      this.history[i].y += random(-2, 2);
    }

    let v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 50) {
      this.history.splice(0, 1);
    }
  }

  show() {
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      noStroke();
      fill(0, 50);
      ellipse(pos.x, pos.y, i, i);
    }
  }
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
