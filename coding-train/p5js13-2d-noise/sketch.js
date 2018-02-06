// 13.4: 2D Noise - Perlin Noise and p5.js Tutorial by Daniel Shiffman
// 13.5: noiseDetail()

let inc = 0.01;
function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {

  let yoff = 0;

  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index] = r;
      pixels[index+1] = r;
      pixels[index+2] = r;
      pixels[index+3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();

  // noLoop();

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(200, 200);
}
