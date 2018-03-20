// - 17.1: Loading and Playing - p5.js Sound Tutorial
let song;
let sliderRate;
let sliderPan;

function setup() {
  createCanvas(windowWidth, 200);
  song = loadSound("Futura.mp3", loaded);
  song.setVolume(0.5);
  sliderRate = createSlider(0, 3, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded() {
  song.play();
}

function draw() {
  background(0);

  song.rate(sliderRate.value());
  song.pan(sliderPan.value());

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

// function touchMoved() {
//   return false;
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
