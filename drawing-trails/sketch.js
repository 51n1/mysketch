// 
// - p5.js Tutorial by Daniel Shiffman

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

class Circle {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.r = 1;
    this.growing = true;
  }

  grow() {
    if ( this.growing ) {
      this.r = this.r + 0.5;
    }
  }

  edges() {
    return ( this.x + this.r > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0 );
  }

  show() {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}

function touchMoved() {
  return false;
}
