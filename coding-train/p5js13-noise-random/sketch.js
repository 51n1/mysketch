// 13.2: noise() vs random() - Perlin Noise and p5.js Tutorial by Daniel Shiffman

let xoff = 0;
let yoff = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
}

function draw() {
  background(51, 5);

  // let x = random(width);
  // let y = random(height);
  let x = map(noise(xoff), 0, 1, 0, width);
  let y = map(noise(yoff), 0, 1, 0, height);
  xoff += 0.01;
  yoff += 0.01;
  noStroke();
  ellipse(x, y, 24);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
