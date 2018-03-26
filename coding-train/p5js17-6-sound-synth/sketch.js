// - 17.6: Sound Synthesis - p5.js Sound Tutorial
// - 17.7: ADSR(AttackDecaySustainRelease) Envelope

let wave;
let button;
let playing = false;
let slider;

let env;

function setup() {
  let cnv = createCanvas(windowWidth, 300);
  cnv.parent("sketch_canvas");

  env = new p5.Env();
  env.setADSR(0.05, 0.1, 0.5, 1);
  env.setRange(1.2, 0);

  wave = new p5.Oscillator();
  wave.setType("sine");
  wave.start();
  wave.freq(440);
  wave.amp(env);

  button = createButton("play/pause");
  button.parent("play_button");
  button.mousePressed(toggle);

  slider = createSlider(100, 1200, 440);
  slider.parent("freq_slider");
}

function toggle() {
  env.play();
  // if (!playing) {
  //   wave.amp(0.5, 1);
  //   playing = true;
  // } else {
  //   wave.amp(0, 1);
  //   // wave.stop();
  //   playing = false;
  // }
}

function draw() {
  wave.freq(slider.value());
  if (playing) {
    background(0, 180, 255);
  } else {
    background(51);
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

// function touchMoved() {
//   return false;
// }
//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
