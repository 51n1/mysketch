
let capture;
let button;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(320, 240);
  background(100);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  // capture.hide();
  button = createButton('snap');
  button.mousePressed(takesnap);
}

function takesnap() {
  image(capture, 0, 0, width, height);
}

function mousePressed() {
  image(capture, 0, 0);
}

function draw() {
  // background(100);
  // tint(255, 0, 125);
  // image(capture, 0, 0, width, height);
  // filter(INVERT);

  //if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

//function touchMoved() {
//  return false;
//}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}
