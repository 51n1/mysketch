// - Nature of Code - 2.3 Friction Force

let movers = [];
let mu = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), 0, random(1, 8), random(50, 70));
  }

  colorMode(HSB, 100);
  background(50);
}

function draw() {
  // background(0);
  stroke(100);
  strokeWeight(3);
  line(0, height/2, width, height);

  for (let mover of movers) {
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);
    mover.friction();
    mover.update();
    mover.edges();
    mover.show();
  }
}

class Mover {
  constructor(x, y, m, c) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    this.color = c;
  }

  friction() {
    let diff = height - (this.pos.y + this.r);
    if (diff < 1) {
      // Direction of Friction
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      // Magnitude of Friction
      let normal = this.mass;
      friction.setMag(mu * normal);
      this.applyForce(friction);
    }

  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(force);
  }

  edges() {
    // x1, y1 = 0, height/2
    // x2, y2 = width, height
    // y-height/2 = (height-height/2 / width-0) * (x - 0)
    let y = ((height - 0.5 * height) / width) * this.pos.x + 0.5 * height
    if (this.pos.y >= y - this.r) {
      this.pos.y = y - this.r;
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
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    strokeWeight(1);
    // stroke(255, 200);
    // fill(255, 100);
    stroke(100, 50, 100, 50);
    fill(this.color, random(50, 50), 100, 50);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

function keyPressed() {
  if (keyIsDown(ENTER)) {
    saveCanvas();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
