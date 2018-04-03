// WebGL and p5.js Tutorial by Daniel Shiffman
// 18.6 createGraphics() as WebGL Texture

let angle = 0;

// let graphics;

let love;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // graphics = createGraphics(200, 200);
  // graphics.background(255);

  love = createGraphics(200, 200);
  // love.background(0, 100);
  love.fill(255);
  love.textAlign(CENTER);
  love.textSize(48);
  love.text('WebGL', 100, 100);
}

function draw() {
  background(175);

  // graphics.fill(255, 0, 255);
  // graphics.ellipse(mouseX, mouseY, 20);

  ambientLight(0, 128, 255);
  directionalLight(255, 255, 255, 1, -1, 1);
  ambientMaterial(255, 0);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);

  texture(love);
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
