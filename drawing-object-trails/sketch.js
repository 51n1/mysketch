// - 9.7: Drawing Object Trails
// - p5.js Tutorial by Daniel Shiffman
let gravity = 0.1;
let particle;

function setup() {
  createCanvas(windowWidth,windowHeight);
  particle = new Particle(100, 100);
}

function draw() {
  background(200);
  particle.update();
  particle.show();

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

class Particle {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.r = 10;
    this.yspeed = 0;
  }

  update() {
    this.y += this.yspeed;
    this.yspeed += gravity;
    if (this.y > height) {
      this.y = height;
      this.yspeed *= -0.9;
    }
  }

  show() {
    stroke(0);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
