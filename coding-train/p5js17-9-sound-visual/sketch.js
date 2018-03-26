// - 17.9: Sound Visualization - p5.js Sound Tutorial

let song;
let amp;
let history = [];

function preload() {
  song = loadSound("Futura.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  history.push(vol);
  ellipse(width/2, height/2, vol * width, vol * height);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
