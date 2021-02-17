// Reference: https://youtu.be/ZI1dmHv3MeM
let clouds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1; i++) {
    clouds.push(new Cloud(i));
  }
  background(50, 150, 200);
  // gradient = drawingContext.createLinearGradient(width/2, 0, width/2, height);
  // gradient.addColorStop(0.0, "rgba(200, 255, 255, .5)");
  // gradient.addColorStop(0.9, "rgba(50, 50, 100, .5)");
  // drawingContext.fillStyle = gradient;
  // drawingContext.fillRect(0, 0, width, height);
}

function draw() {
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].show();
  }
}

class Cloud {
  constructor(n) {
    this.noiseMax = 2;
    this.zoff = random(10);
    this.xpos = random(0, width);
    this.ypos = height/2 + random(height/2);
    // this.col = (255 - 50) + 5 * n;
    this.col = 255;
  }

  show() {
    push();
    translate(this.xpos, this.ypos);

    stroke(this.col, 10);
    fill(this.col, 1);
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.03) {
      let xoff = map(cos(a), -1, 1, 0, this.noiseMax);
      let yoff = map(sin(a), -1, 1, 0, this.noiseMax);
      let r = map(noise(xoff, yoff, this.zoff), 0, 1, height/2, height);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);

    this.zoff += 0.001;

    pop();
  }
}

// --------------------------------------

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}

function touchMoved() {
  return false;
}
