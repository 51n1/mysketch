let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  stroke(0);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  // Random Part
  beginShape();
  for (let x = 0; x < width/2; x++) {
    let y = random(height);
    vertex(x, y);
  }
  endShape();
  fill(51);
  text("Random", width*1/4, height/2);
  noFill();

  // Noise Part
  beginShape();
  let xoff = start;
  for (let x = width/2; x < width; x++) {
    let n = map(noise(xoff), 0, 1, 0, height);
    let s = map(sin(xoff), -1, 1, -50, 50);
    let y = n + s;
    // let y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  fill(51);
  text("Noise", width*3/4, height/2);
  noFill();

  start += inc;

  // line(width/2, 0, width/2, height);

}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
