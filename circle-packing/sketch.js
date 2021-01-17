// 50.1: CODING CHALLENGE: ANIMATED CIRCLE PACKING Part 1
// - p5.js Tutorial by Daniel Shiffman
let c = []

function setup() {
  // createCanvas(windowWidth,windowHeight);
  createCanvas(1920,1080);
  // frameRate(10);
}

function draw() {
  background(0);

  let total = 10;
  let count = 0;
  let attempts = 0;

  while ( count < total ) {
    let newC = newCircle();
    if ( newC != null ) {
      c.push(newC);
      count++;
    }
    attempts++;
    if ( attempts > 1000 ) {
      noLoop();
      console.log("FINISHED");
      break;
    }
  }


  for ( let i = 0; i < c.length; i++ ) {
    if ( c[i].growing ) {
      if ( c[i].edges() ) {
        c[i].growing = false;
      } else {
        for ( let j = 0; j < c.length; j++ ) {
          if (i != j ) {
            let d = dist(c[i].x, c[i].y, c[j].x, c[j].y);
            if ( d - 1 < c[i].r + c[j].r ) {
              c[i].growing = false;
              break;
            }
          }
        }
      }
    }

    c[i].show();
    c[i].grow();
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function newCircle() {
  let x = random(width);
  let y = random(height);
  let valid = true;
  for ( let i = 0; i < c.length; i++ ) {
    let d = dist(x, y, c[i].x, c[i].y);
    if ( d < c[i].r ) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
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
