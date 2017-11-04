// 7.6: Checking Objects Intersection Part 1
// 7.7: Checking Objects Intersection Part 2
// - p5.js Tutorial by Daniel Shiffman

// let bubbles = [];
let b1;
let b2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  b1 = new Bubble(250, 200, 50);
  b2 = new Bubble(350, 200, 50);
  // for (let i = 0; i < 10; i++) {
  //   let x = random(width);
  //   let y = random(height);
  //   let r = random(10, 50);
  //   let b = new Bubble(x, y, r);
  //   bubbles.push(b);
  // }
}

// function mousePressed() {
//   for (let i = bubbles.length - 1; i >= 0; i--) {
//     if ( bubbles[i].contains(mouseX, mouseY) ) {
//       bubbles.splice(i, 1);
//       return;
//     }
//   }
// }

function draw() {
  background(0);

  b1.move();
  b1.show();
  b2.move();
  b2.show();

  if ( b1.intersects(b2) ) {
    b1.changeColor(random(255));
    b2.changeColor(random(255));
  }

  // for (let i = 0; i < bubbles.length; i++) {
  //   if ( bubbles[i].contains(mouseX, mouseY) ) {
  //     bubbles[i].changeColor(255);
  //   } else {
  //     bubbles[i].changeColor(0);
  //   }
  //   bubbles[i].move();
  //   bubbles[i].show();
  // }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
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
    strokeWeight(2);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}

// function touchMoved() {
//   return false;
// }
