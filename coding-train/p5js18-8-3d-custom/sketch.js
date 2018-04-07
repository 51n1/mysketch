// WebGL and p5.js Tutorial by Daniel Shiffman
// 18.8: 3D Custom Shapes

let angle = 0;

let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  graphics = createGraphics(200, 200);
  graphics.background(0, 128, 128, 100);
  graphics.fill(255, 100);
  graphics.textAlign(CENTER);
  graphics.textSize(48);
  graphics.text('WebGL', 100, 115);
}

function draw() {
  background(175);

  // graphics.fill(255, 0, 255, 100);
  // graphics.ellipse(mouseX, mouseY, 10);

  // ambientLight(0, 128, 255);
  // directionalLight(255, 255, 255, 1, -1, 1);
  // ambientMaterial(255, 0);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  // normalMaterial();
  // texture(graphics);
  // box(200);

  texture(graphics);
  beginShape();
  translate(-100, -100);
  vertex(0, 0, 0, 0, 0);
  vertex(200, 0, 0, 1, 0);
  vertex(200, 200, 0, 1, 1);
  vertex(0, 200, 0, 0, 1);
  endShape(CLOSE);

  angle += 0.01;

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
