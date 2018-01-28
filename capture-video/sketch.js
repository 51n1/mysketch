
let capture;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 300);
  
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  // capture.hide();
}

function draw() {
  background(255, 255, 0);
  image(capture, 0, 0, 320, 240);
  // filter(INVERT);
  
  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
