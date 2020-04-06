// 1.5 A Unit Vector- The Nature of Code 2

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(400,400);
}

function draw() {
  background(0);

  let pos = createVector(width/2, height/2);
  let mouse = createVector(mouseX, mouseY);
  let v = p5.Vector.sub(mouse, pos);

  // let m = v.mag();
  // v.div(m);
  // v.normalize();
  // v.mult(50);
  v.normalize().mult(50);
  // v.setMag(50);

  translate(width/2,height/2);
  strokeWeight(4);
  stroke(255);
  line(0, 0, v.x, v.y);

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
