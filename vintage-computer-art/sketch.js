let t;
const NUM_LINES = 12;

function setup() {
  createCanvas(windowWidth, windowHeight);
  t = 0;
}

function x1(t) {
  return sin(t / 10) * 200 + sin(t / 5) * 10;
}

function y1(t) {
  return cos(t / 10) * 100 + sin(t / 5) * 130;
}

function x2(t) {
  return sin(t / 10) * 200 + sin(t / 15) * 120;
}

function y2(t) {
  return cos(t / 20) * 150 + cos(t / 12) * 50;
}

function draw() {
  background(50);
  stroke(0, 255, 255);
  strokeWeight(5);

  translate(width/2, height/2);

  for (let i = 0; i < NUM_LINES; i++) {
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
  }
  t += 0.5;

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
