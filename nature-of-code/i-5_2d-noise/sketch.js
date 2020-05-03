let inc = 0.01;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {

  let yoff = 0;

  loadPixels();

  for (let y = 0; y < height; y++){
    let xoff = 0;
    for (let x = 0; x < width; x++){
      noiseDetail(1, 0.5);
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }

  updatePixels();

  noLoop();

}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}
