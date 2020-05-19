// - By GIF Loop Template
// Reference: Coding Challenge #135: Making a GIF Loop in Processing <https://youtu.be/nBKwCCtWlUg>

let totalFrames = 120;
let counter = 0;
let canvas;
let isRecord = false;

function setup() {
  canvas = createCanvas(600, 600);
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
  stroke(255);
  strokeWeight(2);
  noFill();

  let angle = percent * TWO_PI;

  // for (i = 0; i < 10; i++) {
  //   let a = angle + i * TWO_PI/10;
  //   let x = 100 + 60 * sin(a);
  //   let y = 100 + 60 * cos(a);
  //   ellipse(x, y, 10, 10);
  // }

  push();
  translate(0, 0);
  for (i = 0; i < 10; i++) {
    let a = i * 0;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

  push();
  translate(200, 0);
  for (i = 0; i < 10; i++) {
    let a = i * 1;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

  push();
  translate(400, 0);
  for (i = 0; i < 10; i++) {
    let a = i * 2;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

  push();
  translate(0, 200);
  for (i = 0; i < 10; i++) {
    let a = i * 3;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

  push();
  translate(200, 200);
  for (i = 0; i < 10; i++) {
    let a = i * 4;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

  push();
  translate(400, 200);
  for (i = 0; i < 10; i++) {
    let a = i * 5;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

  push();
  translate(0, 400);
  for (i = 0; i < 10; i++) {
    let a = i * 6;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

  push();
  translate(200, 400);
  for (i = 0; i < 10; i++) {
    let a = i * 7;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

  push();
  translate(400, 400);
  for (i = 0; i < 10; i++) {
    let a = i * 8;
    let x = 100 + 8 * i * sin(angle + a);
    let y = 100 + 8 * i * cos(angle + a);
    ellipse(x, y, 10, 10);
  }
  pop();

}
