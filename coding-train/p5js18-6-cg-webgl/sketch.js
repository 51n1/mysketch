// WebGL and p5.js Tutorial by Daniel Shiffman
// 18.6 createGraphics() as WebGL Texture

let angle = 0;

let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  graphics = createGraphics(200, 200);
  graphics.background(255, 0, 0, 200);
  graphics.fill(255);
  graphics.textAlign(CENTER);
  graphics.textSize(48);
  graphics.text('WebGL', 100, 115);
}

function draw() {
  background(175);

  // graphics.fill(255, 0, 255, 100);
  // graphics.ellipse(mouseX, mouseY, 10);

  ambientLight(0, 128, 255);
  directionalLight(255, 255, 255, 1, -1, 1);
  ambientMaterial(255, 0);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);

  texture(graphics);
  box(200);

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
