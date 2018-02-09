// - Coding Challenge #36: Blobby! by Daniel Shiffman

let yoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);

  translate(width/2, height/2);

  let radius = 150;

  beginShape();
  let xoff = 0;

  for (let a = HALF_PI; a < TWO_PI + HALF_PI; a += 0.05) {
    let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
    // ellipse(x, y, 10);
  }

  endShape(CLOSE);

  yoff += 0.01;

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
