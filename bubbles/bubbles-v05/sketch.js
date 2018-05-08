// bubbles version 05: Object and Array + Filter
// Reference source: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bb7z2IJaTlzwzIg_5yvL4i

let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let protection = 0;
  while (bubbles.length < 300) {
    let r = random(10, 20);
    let bubble = new Bubble(r);
    let overlapping = false;
    for (let j = 0; j < bubbles.length; j++) {
      let other = bubbles[j];
      let d = dist(bubble.x, bubble.y, other.x, other.y);
      if (d < bubble.r + other.r) {
        // They are overlapping!
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      bubbles.push(bubble);
    }
    protection++;
    if (protection > 2000) {
      break;
    }
  }

  noLoop();
  console.log(bubbles.length);
}

function draw() {
  background(160, 250, 255);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].c = color(0, 150);
    bubbles[i].show();
  }

  filter(BLUR, 2);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].x = bubbles[i].x - 5;
    bubbles[i].y = bubbles[i].y - 5;
    bubbles[i].c = color(255, 255, 100, 225);
    bubbles[i].show();
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

// function keyPressed() {
//   saveCanvas();
// }

class Bubble {
  constructor(r_) {
    this.x = random(width);
    this.y = random(height);
    this.r = r_;
    this.c = color(255, 255, 100, 200);
  }

  show() {
    stroke(255);
    strokeWeight(0.5);
    fill(this.c);
    ellipse(this.x, this.y, this.r * 2);
  }

}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
