// 18.2: 3D Geometries - WebGL and p5.js Tutorial by Daniel Shiffman

let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(175);

  rectMode(CENTER);
  fill(0, 0, 255);
  noStroke();
  // translate(0, 0, mouseY);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  // rect(0, 0, 150, 150);

  torus(100, 30);

  angle += 0.03;

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
