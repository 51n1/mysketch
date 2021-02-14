// Made By GIF Loop Template
// Reference: Coding Challenge #135: Making a GIF Loop in Processing <https://youtu.be/nBKwCCtWlUg>
// This code is https://github.com/51n1/mysketch/tree/master/gif-loop-project/gif-loop-template/
// This code's demo url is https://51n1.github.io/mysketch/gif-loop-project/gif-loop-template/

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
    let outputfilename = "output/gif-" + nf(counter, 3) + ".png";
    saveCanvas(canvas, outputfilename, "png");
    counter++;

    if (counter == totalFrames) {
      noLoop();
    }
  }
}

function render(percent) {
  background(0);
  let angle = percent * TWO_PI;
  translate(width/2, height/2);
  rectMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(2);
  rotate(angle);
  square(0, 0, 100);

}
