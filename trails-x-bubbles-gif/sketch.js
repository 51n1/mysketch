// Tails X Bubbles
let particles = [];
let bubbles = [];

let gradient;

let totalFrames = 240;
let counter = 0;
let canvas;
let isRecord = false;

function setup() {
  createCanvas(400, 400);

  // tails
  for (let i = 0; i < 10; i++){
    particles.push(new Particle(width/2 + random(-100, 100), height/2 + random(-100, 100)));
  }

  // bubbles
  let protection = 0;
  while (bubbles.length < 100) {
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

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(0, 255, 255, .5)';

  gradient = drawingContext.createLinearGradient(width/2, 0, width/2, height);
  gradient.addColorStop(0.0, "rgba(200, 255, 255, .5)");
  gradient.addColorStop(0.9, "rgba(50, 50, 100, .5)");

  if (isRecord) {
    frameRate(1);
  }

}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  let percent = 0;
  if (isRecord) {
    percent = counter / totalFrames;
  } else {
    percent = (frameCount % totalFrames) / totalFrames;
  }
  // render(percent);
  if (isRecord) {
    let outputfilename = "output/gif-" + nf(counter, 3) + ".png";
    saveCanvas(canvas, outputfilename, "png");
    counter++;

    if (counter == totalFrames) {
      noLoop();
    }
  }

  // background
  background(200);
  drawingContext.fillStyle = gradient;
  drawingContext.fillRect(0, 0, width, height);

  // tails
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

  // bubbles
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
}

class Particle {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.r = 0.5;
    this.v = 1;
    this.history = [];
  }

  update() {
    this.x += random(-this.v*4, this.v*4);
    this.y += random(-this.v*4, this.v*4);

    for (let i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-this.v, this.v);
      this.history[i].y += random(-this.v, this.v);
    }

    let v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 50) {
      this.history.splice(0, 1);
    }
  }

  show() {
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      noStroke();
      fill(255, 50);
      ellipse(pos.x, pos.y, this.r * i);
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
      this.x = this.x + random(-2, 2);
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

function touchMoved() {
  return false;
}
