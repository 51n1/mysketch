// Circular Motion - GIF Loop
// Coding Challenge #135: Making a GIF Loop in Processing
// https://youtu.be/nBKwCCtWlUg

let totalFrames = 120;
let counter = 0;
let canvas;
let isRecord = false;

function setup() {
  canvas = createCanvas(400, 400);
  if (isRecord) {
    frameRate(1);
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
  noStroke();
  fill(percent * 255);

  let angle = percent * TWO_PI;
  let circles = 40;
  for (i = 0; i < circles; i++) {
    let a = angle + i * TWO_PI / circles;
    let x = width/2 + percent * ( width * sqrt(2) / 2 ) * sin(a);
    let y = height/2 + percent * ( width * sqrt(2) / 2 ) * cos(a);
    ellipse(x, y, 10, 10);
  }

}
