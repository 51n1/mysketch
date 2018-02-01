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

  video.loadPixels();
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = video.pixels[index+0];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];

      let bright = (r+g+b)/3;

      pixels[index+0] = bright;
      pixels[index+1] = bright;
      pixels[index+2] = bright;
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
