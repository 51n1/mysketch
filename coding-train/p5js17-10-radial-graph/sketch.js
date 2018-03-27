// - 17.10: Sound Visualization: Radial Graph - p5.js Sound Tutorial

let song;
let amp;
let volhistory = [];
let button;

function preload() {
  song = loadSound("Futura.mp3");
}

function setup() {
  let cnv = createCanvas(windowWidth, 300);
  cnv.parent("sketch_canvas");
  angleMode(DEGREES);

  button = createButton("toggle");
  button.parent("play_button");
  button.mousePressed(toggleSong);

  amp = new p5.Amplitude();
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
  let vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();

  translate(width/2, height/2);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let r = map(volhistory[i], 0, 1, 10, 150);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
