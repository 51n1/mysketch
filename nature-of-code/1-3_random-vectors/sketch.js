// 1.3 Random Vectors - The Nature of Code 2

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {

  translate(width/2, height/2);

  // let v = createVector(random(-100, 100), random(-100, 100));
  let v = p5.Vector.random2D();
  v.mult(random(50, 100));

  strokeWeight(4);
  stroke(255, 20);
  line(0, 0, v.x, v.y);

  // if (touches.length > 1) saveCanvas();
  // save(frameCount+".png");
}

function keyPressed() {
  if (keyIsDown(ENTER)) saveCanvas();
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
