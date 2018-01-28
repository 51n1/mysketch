
let capture;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 600);
  
  capture = createCapture(VIDEO);
  // createCapture(VIDEO);
  capture.size(320, 240);
  // capture.hide();
}

function draw() {
  background(100);
  image(capture, 350, 0, 320, 240);
  filter(INVERT);
  
  //if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

//function touchMoved() {
//  return false;
//}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}
