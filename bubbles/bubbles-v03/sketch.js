// bubbles version 03: Object and Array + Intersection
// Reference source: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bb7z2IJaTlzwzIg_5yvL4i

let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(600, 400);

  for (let i = 0; i < 200; i++) {
    let r = random(10, 20);
    let b = new Bubble(r);
    bubbles.push(b);
  }
}

function draw() {
  background(160, 250, 255);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].ascend();
    bubbles[i].show();
    bubbles[i].top();
    bubbles[i].edge();

    for (let j = 0; j < bubbles.length; j++) {
      if ( i != j && bubbles[i].intersects(bubbles[j]) ) {
        bubbles[i].changeUp(bubbles[j]);
        // bubbles[j].changeUp(bubbles[i]);
      }
    }
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

class Bubble {
  constructor(r_) {
    this.x = random(width);
    this.y = height;
    this.r = r_;
    this.speed = random(0.5, 1.5);
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if ( d < this.r + other.r ) {
      return true;
    } else {
      return false;
    }
  }

  changeUp(other) {
    this.x = this.x > other.x ? this.x + random(1) : this.x - random(1);
    this.y -= 1;
  }

  ascend() {
    this.x = this.x + random(-2, 2);
    this.y = this.y - this.speed;
  }

  show() {
    stroke(255);
    strokeWeight(0.5);
    fill(255, 255, 100, 200);
    ellipse(this.x, this.y, this.r * 2);
  }

  top() {
    if (this.y < -this.r) {
      this.y = height + this.r;
    }
  }

  edge() {
    if (this.x + this.r > width) this.x = width - this.r;
    if (this.x - this.r < 0) this.x = this.r;
  }
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
