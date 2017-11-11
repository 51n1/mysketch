// 50.1: CODING CHALLENGE: ANIMATED CIRCLE PACKING Part 1
// - p5.js Tutorial by Daniel Shiffman
let circles = [];
let spots = [];
let img;

function preload() {
  img = loadImage("fuji.png");
}

function setup() {
  // createCanvas(windowWidth,windowHeight);
  createCanvas(900,450);
  // frameRate(10);
  let density = displayDensity();
  pixelDensity(density);
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = x + y * img.width;
      let c = img.pixels[index*4];
      let b = brightness(c);
      if ( b > 1 ) {
        spots.push(createVector(x, y));
      }
    }
  }
  console.log(img.width);
  console.log(img.height);
  console.log("pixels", img.pixels.length);
  console.log("spots", spots.length);
  console.log(density)
}

function draw() {
  background(79, 54, 71);

  let total = 10;
  let count = 0;
  let attempts = 0;

  while ( count < total ) {
    let newC = newCircle();
    if ( newC != null ) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if ( attempts > 1000 ) {
      noLoop();
      console.log("FINISHED");
      break;
    }
  }


  for ( let i = 0; i < circles.length; i++ ) {
    let circle = circles[i];
    if ( circle.growing ) {
      if ( circle.edges() ) {
        circle.growing = false;
      } else {
        for ( let j = 0; j < circles.length; j++ ) {
          let other = circles[j];
          if (i != j ) {
            let d = dist(circle.x, circle.y, other.x, other.y);
            if ( d - 2 < circle.r + other.r ) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function newCircle() {
  let r = int(random(0, spots.length));
  let spot = spots[r];
  let x = spot.x;
  let y = spot.y;

  let valid = true;
  for ( let i = 0; i < circles.length; i++ ) {
    let d = dist(x, y, circles[i].x, circles[i].y);
    if ( d < circles[i].r + 2 ) {
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
    return ( this.x + this.r >= width || this.x - this.r <= 0 || this.y + this.r >= height || this.y - this.r <= 0 );
  }

  show() {
    stroke(0, 5, 2);
    strokeWeight(2);
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
}

function touchMoved() {
  return false;
}
