// - 9.7: Drawing Object Trails
// - p5.js Tutorial by Daniel Shiffman
let particles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  //particle = new Particle(width/2, height/2);
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

    let v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 25) {
      this.history.splice(0, 1);
    }
  }

  show() {
    stroke(0);
    fill(0, 150);
    ellipse(this.x, this.y, this.r * 2);

    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      fill(random(255));
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
