// - 17.11: Sound Visualization: Frequency Analysis with FFT - p5.js Sound Tutorial

let song;
let fft;
let volhistory = [];
let button;
let w;

function preload() {
  song = loadSound("Futura.mp3");
}

function setup() {
  let cnv = createCanvas(windowWidth, 300);
  cnv.parent("sketch_canvas");
  angleMode(DEGREES);
  colorMode(HSB);

  button = createButton("toggle");
  button.parent("play_button");
  button.mousePressed(toggleSong);

  fft = new p5.FFT(0.9, 64);
  w = width / 64;
}

function toggleSong() {
  if (!song.isPlaying()) {
    song.play();
  } else {
    song.pause();
  }
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  // translate(width / 2 - 256 / 2, 0);
  // stroke(255);
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w - 2, height - y);
  }
  // console.log(spectrum.length);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, 300);
  w = width / 64;
}
