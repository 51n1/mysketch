// 7.6: Checking Objects Intersection Part 1
// 7.7: Checking Objects Intersection Part 2
// - p5.js Tutorial by Daniel Shiffman

let bubbles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  // createCanvas(640,400);
  // frameRate(10);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 30);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

// 7.4: Mouse Interaction with Objects
function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if ( bubbles[i].contains(mouseX, mouseY) ) {
      bubbles.splice(i, 1);
      return;
    }
  }
}

function draw() {
  background(0);

  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
    // 7.7: Checking Objects Intersection
    for (let other of bubbles) {
      if ( bubble != other && bubble.intersects(other) ) {
        bubble.changeColor(random(255));
        other.changeColor(random(255));
      }
    }
    // 7.4: Mouse Interaction with Objects
    if ( bubble.contains(mouseX, mouseY) ) {
      bubble.changeColor(255);
    } else if ( !bubble.contains(pmouseX, pmouseY) ) {
      bubble.changeColor(0);
    }
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if ( d < this.r + other.r ) {
      return true;
    } else {
      return false;
    }
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if ( d < this.r ) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    stroke(255);
    strokeWeight(1);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
