// Coding Challenge #24: Perlin Noise Flow Field - Perlin Noise and p5.js Tutorial by Daniel Shiffman

let inc = 0.01;
let scl = 20;
let cols, rows;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(200, 200);
  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      xoff += inc;
      fill(random(255));
      rect(x * scl, y * scl, scl, scl);
    }
    yoff += inc;
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
