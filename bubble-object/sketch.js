// Reference source: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bb7z2IJaTlzwzIg_5yvL4i

let bubble1;
let bubble2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bubble1 = new Bubble(width/2, height, random(10,50));
  bubble2 = new Bubble(width/2, height, random(10,50));
}

function draw() {
  background(160, 250, 255);

  bubble1.ascend();
  bubble1.show();
  bubble1.top();

  bubble2.ascend();
  bubble2.show();
  bubble2.top();

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

class Bubble {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }

  ascend() {
    this.y--;
    this.x = this.x + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(0.5);
    fill(255, 255, 100, 150);
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
