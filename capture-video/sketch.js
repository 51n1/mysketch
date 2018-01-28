
var capture;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 600);
  pixelDensity(1);
  
  capture = createCapture(VIDEO);
  // createCapture(VIDEO);
  capture.size(320, 240);
  // capture.hide();
}

function draw() {
  // background(51);
  image(capture, 0, 100, 320, 240);
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
