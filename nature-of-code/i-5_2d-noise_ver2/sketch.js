let inc = 0.01;
let a = 0;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600, 300);
  pixelDensity(1);
}

function draw() {
  let yoff = a;
  loadPixels();

  for (let y = 0; y < height; y++){
    let xoff = random(0, 0.1);
    noiseDetail(1, 0.9);
    for (let x = 0; x < width; x++){
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r + random(0, 50);
      pixels[index + 1] = r + random(0, 50);
      pixels[index + 2] = r + random(0, 50);
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }

  a += 0.01;
  updatePixels();

}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
