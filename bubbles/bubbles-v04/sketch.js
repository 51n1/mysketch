// bubbles version 04: Object and Array + Intersection + alpha
// Reference source: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bb7z2IJaTlzwzIg_5yvL4i

let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let protection = 0;
  while (bubbles.length < 300) {
    let r = random(10, 15);
    let bubble = new Bubble(r);
    let overlapping = false;
    for (let j = 0; j < bubbles.length; j++) {
      let other = bubbles[j];
      let d = dist(bubble.x, bubble.y, other.x, other.y);
      if (d < bubble.r + other.r) {
        // They are overlapping!
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      bubbles.push(bubble);
    }
    protection++;
    if (protection > 2000) {
      break;
    }
  }
  console.log(bubbles.length);
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
        bubbles[j].changeUp(bubbles[i]);
      } else {
        bubbles[i].flag = true;
      }
    }
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

class Bubble {
  constructor(r_) {
    this.x = random(width);
    this.y = random(height);
    this.r = r_;
    this.speed = random(1.5, 2.5);
    this.flag = true;
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
    this.flag = false;
    this.x = this.x > other.x ? this.x + random(1) : this.x - random(1);
    this.y = this.y > other.y ? this.y : this.y - random(1);
  }

  ascend() {
    if (this.flag) {
      this.x = this.x + random(-2, 2);
      this.y = this.y - this.speed;
    }

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
