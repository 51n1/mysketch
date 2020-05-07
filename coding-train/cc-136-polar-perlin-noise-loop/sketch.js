// Reference: https://youtu.be/ZI1dmHv3MeM
// Demo: https://51n1.github.io/mysketch/coding-train/cc-136-polar-perlin-noise-loop/

let noiseMax = 2;
let slider;
let phase = 0;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // slider = createSlider(0, 10, 5, 0.1);
}

function draw() {
  background(0);
  translate(width/2, height/2);

  stroke(255);
  noFill();
  beginShape();
  // noiseMax = slider.value();
  for (let a = 0; a < TWO_PI; a += 0.03) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 300);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  zoff += 0.01;
  //phase += 0.01;
  // noLoop();
}


function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}
