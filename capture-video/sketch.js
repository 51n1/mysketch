
let capture;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 300);
  background(0);
  capture = createCapture(VIDEO);
  capture.size(300, 200);
  // capture.hide();
}

function draw() {
  
  image(capture, 0, 0, 300, 200);
  
  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
