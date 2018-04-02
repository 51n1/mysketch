// WebGL and p5.js Tutorial by Daniel Shiffman
// 18.2: 3D Geometries
// 18.3: Light and Material
// 18.4: 

let angle = 0;
let img;

function preload() {
  img = loadImage("red.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(175);
  // let dx = mouseX - width / 2;
  // let dy = mouseY - height / 2;
  // let v = createVector(dx, dy, 0);
  // v.normalize();
  // v.div(100);
  ambientLight(255);
  // pointLight(0, 0, 255, -1000, 0, 1000);
  // directionalLight(255, 255, 255, v);
  directionalLight(0, 0, 255, 1, 0, 0);
  directionalLight(0, 255, 0, 0, 1, 0);
  directionalLight(255, 0, 0, 0, 0, -1);

  // translate(0, 0, mouseY);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);

  noStroke();
  // normalMaterial();
  // ambientMaterial(255);
  // specularMaterial(255);
  texture(img);
  // torus(150, 25);
  // plane(300, 300);
  // sphere(200);
  box(200);

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
