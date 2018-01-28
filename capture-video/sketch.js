
let capture;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(240, 320);
  background(100);
  
  capture = createCapture(VIDEO);
  // createCapture(VIDEO);
  capture.size(240, 320);
  // capture.hide();
}

function draw() {
  
  image(capture, 0, 0, 240, 320);
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
