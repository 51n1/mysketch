// - p5.js template

let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover(0, height/2);
  background(0);
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
  }

  let gravity = createVector(0, 0.8);
  mover.applyForce(gravity);

  mover.update();
  mover.edges();
  mover.show();
}

class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = p5.Vector.random2D();
    // this.vel.mult(random(3));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    // this.acc = p5.Vector.random2D();
    // this.acc.setMag(0.01);

    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255, 200);
    strokeWeight(1);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

function keyPressed() {
  if (keyIsDown(ENTER)) {
    saveCanvas();
  }
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
