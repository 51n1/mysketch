// - 9.8: Random Circles with No Overlap - p5.js Tutorial by Daniel Shiffman

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupCircles();
}

function setupCircles() {
  let circles = [];
  let colors = [];
  colors[0] = { fg: color(255), bg: color(0) };
  colors[1] = { fg: color(255, 70, 10), bg: color(255) };
  colors[2] = { fg: color(0), bg: color(255, 210, 0) };
  colors[3] = { fg: color(255), bg: color(240, 5, 50) };
  let num = floor(random(4));
  // console.log(num);
  let kusamacolor = colors[num];

  background(kusamacolor.bg);

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
    fill(kusamacolor.fg);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2);
  }
}

function mousePressed() {
  setupCircles();
}

function draw() {

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setupCircles();
}
