// bubbles version 02: Object and Array
// Reference source: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bb7z2IJaTlzwzIg_5yvL4i

let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
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
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
