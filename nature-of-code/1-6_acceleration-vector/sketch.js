// - p5.js template

let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover(width/2, height/2);
  background(0);
}

function draw() {
  background(0);
  mover.update();
  mover.show();
}

class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    // this.acc = p5.Vector.random2D();
    // this.acc.setMag(0.01);

    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.4);
    this.vel.add(this.acc);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255, 200);
    strokeWeight(1);
    fill(255, 10);
    ellipse(this.pos.x, this.pos.y, 32);
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
