// Name: Coding Challenge #136.2: Perlin Noise GIF Loops
// Reference: https://youtu.be/c6K-wJQ77yQ
// Demo: https://51n1.github.io/mysketch/coding-train/cc-136-2-polar-perlin-noise-loop/

// - GIF Loop Template
// Coding Challenge #135: Making a GIF Loop in Processing
// https://youtu.be/nBKwCCtWlUg

let totalFrames = 120;
let counter = 0;
let isRecord = false;
let canvas;

let particles = [];

function setup() {
  canvas = createCanvas(600, 600);

  if (isRecord) {
    frameRate(1);
  }

  for (let i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  let percent = 0;
  if (isRecord) {
    percent = counter / totalFrames;
  } else {
    percent = (frameCount % totalFrames) / totalFrames;
  }
  render(percent);
  if (isRecord) {
    let outputfilename = "gif-" + nf(counter, 3) + ".png";
    saveCanvas(canvas, outputfilename, "png");
    counter++;

    if (counter == totalFrames) {
      noLoop();
    }
  }
}

function render(percent) {
  background(0);
  let a = percent * TWO_PI;
  for (let particle of particles) {
    particle.render(a);
  }
}
