
let capture;
let button;
let snapshots = [];

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(800, 240);
  background(100);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  // capture.hide();
  button = createButton('snap');
  button.mousePressed(takesnap);
}

function takesnap() {
  snapshots.push(capture.get());
  // image(capture, 0, 0, width, height);
}

function draw() {
  let w = 80;
  let h = 60;
  let x = 0;
  let y = 0;
  for (let i = 0; i < snapshots.length; i++) {
    tint(255, 50);
    image(snapshots[i], x, y, w, h);
    x = x + w;
    if (x > width) {
      x = 0;
      y = y + h;
    }
  }
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
