// WebGL and p5.js Tutorial by Daniel Shiffman
// 18.5: Camera and Perspective

let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(175);

  let camX = map(mouseX, 0, width, -500, 500);
  let camY = map(mouseY, 0, height, -500, 500);
  camera(camX, camY, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);

  // Default Perspective
  // let fov = PI / 3;
  // let cameraZ = (height / 2.0) / tan(fov / 2.0);
  // perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);

  // let fov = map(mouseX, 0, width, 0, PI);
  // let cameraZ = (height / 2.0) / tan((PI / 3) / 2.0);
  // perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);

  // ortho(-width / 2, width / 2, height / 2 , - height / 2 , 0, 1000);
  ambientLight(50);
  pointLight(255, 255, 255, 0, -500, 500);
  directionalLight(255, 255, 255, 10, 10, 10);

  for (let x = -200; x <= 200; x += 100) {
    for (let y = -200; y <= 200; y += 100) {
      for (let z = -400; z <= 0; z += 100) {
        push();
        translate(x, y, z);
        rotateX(angle);
        rotateY(angle * 0.3);
        rotateZ(angle * 1.2);
        noStroke();
        // normalMaterial();
        ambientMaterial(255);
        box(50);
        pop();
      }
    }
  }

  // translate(0, 300);
  // rotateX(HALF_PI);
  // noStroke();
  // ambientMaterial(255);
  // plane(width, width);

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
