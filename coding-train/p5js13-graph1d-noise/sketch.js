// 13.3: Graphing 1D Perlin Noise - Perlin Noise and p5.js Tutorial by Daniel Shiffman

let inc = 0.001;
let start = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);

  noStroke();
  fill(60);
  rect(10, 10, width - 20, height - 20);

  stroke(255);
  fill(40);
  let offset = start;
  beginShape();
  vertex(10, height - 10);
  for (let x = 10; x < width - 10; x++) {
    stroke(255);
    // let n = map(noise(offset), 0, 1, 0, height);
    // let s = map(sin(offset), -1, 1, -50, 50);
    // let y = n + s;
    // let y = random(height);
    let y = noise(offset) * height;
    vertex(x, y);

    offset += inc;
  }
  vertex(width - 10, height - 10);
  endShape(CLOSE);
  start += inc;

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
