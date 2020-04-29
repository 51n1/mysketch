let rx, ry;
let xoff1 = 0;
let xoff2 = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 168, 82);
  fill(255);
  stroke(0, 100);
  rx = random(0, width/2);
  ry = random(0, height);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
}

function draw() {
  fill(0);
  text("Random", width*1/4, height/2);
  fill(255);
  rx += random(-10, 10);
  rx = constrain(rx, 0, width/2)
  ry += random(-10, 10);
  ry = constrain(ry, 0, height);
  ellipse(rx, ry, 24, 24);

  fill(0);
  text("Noise", width*3/4, height/2);
  fill(255);
  let nx = map(noise(xoff1), 0, 1, width/2, width);
  let ny = map(noise(xoff2), 0, 1, 0, height);
  xoff1 += 0.01;
  xoff2 += 0.01;
  ellipse(nx, ny, 24, 24);

}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
