// Made By GIF Loop Template
// Reference: Coding Challenge #135: Making a GIF Loop in Processing <https://youtu.be/nBKwCCtWlUg>
// This code is https://github.com/51n1/mysketch/tree/master/gif-loop-project/gif-loop-template/
// This code's demo url is https://51n1.github.io/mysketch/gif-loop-project/gif-loop-template/

let totalFrames = 120;
let counter = 0;
let canvas;
let isRecord = false;

// For Sketch
let bubbles = [];

function setup() {
  canvas = createCanvas(600, 600);
  if (isRecord) {
    frameRate(1);
  }

  // For Sketch
  let protection = 0;
  while (bubbles.length < 200) {
    let r = random(2, 4);
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
}

function draw() {
  let percent = 0;
  if (isRecord) {
    percent = counter / totalFrames;
  } else {
    percent = (frameCount % totalFrames) / totalFrames;
  }
  render(percent);
  if (isRecord) {
    let outputfilename = "output/gif-" + nf(counter, 3) + ".png";
    saveCanvas(canvas, outputfilename, "png");
    counter++;

    if (counter == totalFrames) {
      noLoop();
    }
  }
}

function render(percent) {
  // For Sketch
  background(21, 47, 89);

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

}

class Bubble {
  constructor(r_) {
    this.x = random(width);
    this.y = random(height);
    this.r = r_;
    this.speed = random(0.5, 1.5);
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
      // let a = (frameCount % 2) == 0 ? 3 : -3;
      this.x = this.x + random(-2, 2);
      // this.y = this.y - (height / totalFrames);
      this.y = this.y - this.speed;
    }
  }

  show() {
    stroke(255);
    strokeWeight(0.5);
    fill(255, 100);
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
