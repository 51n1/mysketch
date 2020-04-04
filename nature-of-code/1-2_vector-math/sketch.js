let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(width/2,height/2);
  background(100);
}

function draw() {
  background(100);
  walker.update();
  walker.show();

  // if (touches.length > 1) saveCanvas();
  // save(frameCount+".png");
}

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
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
