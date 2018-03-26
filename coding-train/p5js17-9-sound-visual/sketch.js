// - 17.9: Sound Visualization - p5.js Sound Tutorial

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
  beginShape();
  for (let i = 0; i < volhistory.length; i++) {
    let y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();

  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }

  stroke(255, 0, 0);
  line(volhistory.length, 0, volhistory.length, height);

  // ellipse(width/2, height/2, vol * width, vol * height);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
