// - 17.1: Loading and Playing - p5.js Sound Tutorial
// - 17.2: Play and Pause Button
// - 17.3: Timing, Jumps and Cues
// - 17.4: Amplitude Analysis
// - 17.5: Adding Sound Effects
let song;
let playButton;
let sliderVolume;
let jumpButton;
let amp;
let playEffect;
let stopEffect;
let musicRate = 1;

function preload() {
  playEffect = loadSound("sounds/Input/Input-03.mp3");
  stopEffect = loadSound("sounds/Input/Input-05.mp3");
}

function setup() {
  let cnv = createCanvas(windowWidth, 300);
  cnv.parent("sketch_canvas");
  background(0);

  song = loadSound("Futura.mp3", loaded);
  amp = new p5.Amplitude();

  playButton = createButton("loading...");
  playButton.parent("play_button");

  sliderVolume = createSlider(0, 1, 1, 0.01);
  sliderVolume.parent("volume_slider");

  jumpButton = createButton("jump");
  jumpButton.parent("jump_button");

}

function jumpSong() {
  playEffect.play();
  let len = song.duration();
  let t = random(len);
  console.log(t);
  song.jump(t);
  playButton.html("pause");
  song.rate(musicRate += 0.05);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    playEffect.play();
    song.play();
    song.setVolume(0.5);
    playButton.html("pause");
  } else {
    stopEffect.play();
    song.pause();
    playButton.html("play");
  }
}

function loaded() {
  // song.play();
  console.log("loaded");
  playButton.mousePressed(togglePlaying);
  playButton.html("play");
  jumpButton.mousePressed(jumpSong);
}

function draw() {
  if (song.currentTime() > 0) {
    let len = song.duration();
    let x = map(song.currentTime(), 0, len, 0, width);
    let vol = amp.getLevel();
    let y = height - map(vol, 0, 1, 0, height);
    stroke(255, 100);
    line(x, y, x, height);
  }

  song.setVolume(sliderVolume.value());

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

// function touchMoved() {
//   return false;
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
