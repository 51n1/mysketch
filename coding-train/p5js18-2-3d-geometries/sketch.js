// 18.2: 3D Geometries - WebGL and p5.js Tutorial by Daniel Shiffman
// 18.3: Light and Material

let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx,dy,0);
  v.normalize();
  ambientLight(128, 0, 0);
  pointLight(0, 0, 255, -1000, 0, 1000);
  directionalLight(0, 255, 255, v);

  background(175);
  // translate(0, 0, mouseY);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);

  noStroke();
  // normalMaterial();
  ambientMaterial(255);
  // specularMaterial(255);
  torus(150, 25);

  angle += 0.02;

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
