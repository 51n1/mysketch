// 11.4: Brightness Mirror - p5.js Tutorial by Daniel Shiffman
let video;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
}

function draw() {
  background(51);

  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      pixels[index] = x;
      pixels[index+1] = y;
      pixels[index+2] = 0;
      pixels[index+3] = 255;
    }
  }

  updatePixels();

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
