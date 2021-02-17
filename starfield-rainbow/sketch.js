// Reference code:
// Coding Challenge #1: Starfield in Processing by Daniel Shiffman
// https://youtu.be/17WoOqgXsRM

let stars = [];
let speed = 20;

function setup() {
  createCanvas(1000, 500);
  // createCanvas(windowWidth, windowHeight);

  let maxStarts = int(width) * 10;

  for (let i = 0; i < maxStarts; i++) {
    let star = new Star();
    stars.push(star);
  }

  colorMode(HSB, 255);

  // noLoop();
}

function draw() {
  //if (mouseX) speed = map(mouseX, 0, width, 20, 50);

  background(0);
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = random(10);
  drawingContext.shadowBlur = random(10);
  drawingContext.shadowColor = "rgba(0, 255, 255, .5)";

  // gradient = drawingContext.createLinearGradient(width/2, 0, width/2, height);
  gradient = drawingContext.createRadialGradient(width/2, height/2, 50, width/2, height/2, height/2);
  gradient.addColorStop(0, "rgba(200, 255, 255, .5)");
  gradient.addColorStop(.99, "rgba(10, 10, 50, .5)");
  // gradient.addColorStop(1, "rgba(0, 0, 255, .5)");
  drawingContext.fillStyle = gradient;
  drawingContext.fillRect(0, 0, width, height);

  translate(width/2, height/2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let px = map(this.x / this.pz, 0, 1, 0, width);;
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    let col_r;

    if (this.y > 0) {
      col_r = map(this.y, 0, height, 255, 0);
    } else {
      col_r = map(this.y, 0, -height, 0, 255);
    }

    stroke(col_r, 255, 255, 255);

    line(px, py, sx, sy);
  }
}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}
