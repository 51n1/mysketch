// Reference - Coding Challenge #1: Starfield in Processing by Daniel Shiffman

let stars = [];
let speed = 100;

function setup() {
  createCanvas(1920, 1080);
  // createCanvas(document.body.clientWidth, windowHeight);
  // createCanvas(windowWidth, windowHeight);
  // select("body").style("background-color", color(34, 34, 34));

  let maxStarts = int(width) * 10;

  for (let i = 0; i < maxStarts; i++) {
    let star = new Star();
    stars.push(star);
  }

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 8;
  drawingContext.shadowColor = 'white';

  noLoop();
}

function draw() {
  if (mouseX) speed = map(mouseX, 0, width, 20, 50);
  background(34);
  // background(0, 255, 0);
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

    stroke(255, 95);
    line(px, py, sx, sy);
  }
}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
