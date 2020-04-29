// - 3D Random Walker
let x;
let y;
let z;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = 0;
  y = 0;
  z = 0;
  background(0);
}

function draw() {

  stroke(255, 1);
  strokeWeight(1);

  // camera(0, 0, -500, 0, 0, 0, 0, 1, 0);
  // rotateX(radians(map(mouseY, -height*0.5, height*0.5, 0, 360)));
  // rotateY(radians(map(mouseX, -width*0.5, width*0.5, 0, 360)));

  translate(x, y, z);
  fill(255, 1);
  sphere(10);

  let r = floor(random(6));
  let step = 10;

  switch (r) {
    case 0:
      x = x + step;
      break;
    case 1:
      x = x - step;
      break;
    case 2:
      y = y + step;
      break;
    case 3:
      y = y - step;
      break;
    case 4:
      z = z + step;
      break;
    case 5:
      z = z - step;
      break;
  }
}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
