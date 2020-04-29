let xoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  stroke(0);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(51);

  text("Random", width/2, height/4);
  let x1 = random(width);
  ellipse(x1, height/4, 24, 24);

  text("Noise", width/2, height*3/4);
  let x2 = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.01;
  ellipse(x2, height*3/4, 24, 24);

}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
