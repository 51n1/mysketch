// - 17.1: Loading and Playing - p5.js Sound Tutorial
// - 17.2: Play and Pause Button
// - 17.3: Timing, Jumps and Cues
let song;
let playButton;
let sliderVolume;
let jumpButton;
// let sliderRate;
// let sliderPan;

function setup() {
  let cnv = createCanvas(windowWidth, 200);
  cnv.parent("sketch_canvas");
  background(0);

  song = loadSound("Futura.mp3", loaded);

  playButton = createButton("loading...");
  playButton.mousePressed(togglePlaying);
  playButton.parent("play_button");

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.parent("volume_slider");

  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  jumpButton.parent("jump_button");

  // sliderRate = createSlider(0, 3, 1, 0.01);
  // sliderPan = createSlider(-1, 1, 0, 0.01);
}

function jumpSong() {
  let len = song.duration();
  let t = random(len);
  console.log(t);
  song.jump(t);
  playButton.html("pause");
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
    playButton.html("pause");
  } else {
    song.pause();
    playButton.html("play");
  }
}

function loaded() {
  // song.play();
  console.log("loaded");
  playButton.html("play");
}

function draw() {
  if (song.currentTime() > 0) {
    let len = song.duration();
    let x = map(song.currentTime(), 0, len, 0, width);
    stroke(random(255));
    line(x, 0, x, height);
  }

  song.setVolume(sliderVolume.value());

  // song.rate(sliderRate.value());
  // song.pan(sliderPan.value());

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

// function touchMoved() {
//   return false;
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
