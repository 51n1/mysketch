// - 17.8: Microphone Input - p5.js Sound Tutorial

let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  let vol = mic.getLevel();
  console.log(vol);
  background(0);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
