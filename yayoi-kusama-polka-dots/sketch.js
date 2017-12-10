// - 9.8: Random Circles with No Overlap - p5.js Tutorial by Daniel Shiffman
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  let protection = 0;
  while (circles.length < 1000) {
  // for (let i = 0; i < 25; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      r: random(5, 40)
    };
    let overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        // They are overlapping!
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 2000) {
      break;
    }
  }

  for (let i = 0; i < circles.length; i++) {
    fill(255);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2);
  }
}

function draw() {

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}
