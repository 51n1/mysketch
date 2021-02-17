// Reference: https://github.com/51n1/net/blob/master/snapshots/drawingmotion2d.js

let position; // float[][]
let pointer; // int
let amount; // float
let on; // boolean
let max_points = 1000;
let max_lines;

function setup() {
  createCanvas(windowWidth, windowHeight);

  position = new Array(max_points);
  for (let i = 0; i < max_points; i++) {
    position[i] = new Array(2);
  }
  pointer = 0;
  amount = random(0.5, 1);
  on = false;

  noStroke();
  strokeWeight(0.5);
  background(230);
  colorMode(HSB, 255);

  textAlign(CENTER, TOP);
  textSize(30);
  fill(0);
  text("Draw a line and draw painting.", width/2, 10);
}

function draw() {
  if((on == false) && (pointer > 0)) { // After Memory
    // resetScreen();
    for (let a = 0; a < max_lines; a++) {
      let xoff = (a - max_lines/2) * 10;
      let yoff = (a - max_lines/2) * 10;
      push();
      translate(xoff, yoff);
      beginShape(QUAD_STRIP);
      for(let i = 0; i < pointer - 1; i++) {
        position[i][0] += random(-amount, amount);
        position[i][1] += random(-amount, amount);
        line(position[i][0], position[i][1], position[i+1][0], position[i+1][1]);
        vertex(position[i][0], position[i][1]);
      }
      endShape();
      pop();
    }

  } else { // During Memory
    for(let i = 0; i < pointer - 1; i++) {
      stroke(0, 255, 255);
      line(position[i][0], position[i][1], position[i+1][0], position[i+1][1]);
    }
  }
}

function setColor() {
  let col = random(255);
  stroke(col, 150, 150);
  fill(col, 255, 255);
}

function mousePressed() {
  on = true;
  max_lines = round(random(5,10));
  if(pointer > 0) {
    pointer = 0;
    // resetScreen();
  }
}

function mouseDragged() {
  if(pointer < position.length) {
    position[pointer][0] = mouseX;
    position[pointer][1] = mouseY;
    pointer++;
  } else {
    on = false;
    setColor();
  }
}

function mouseReleased() {
  on = false;
  setColor();
}

function resetScreen() {
  fill(230);
  noStroke();
  rect(0, 0, width, height);
}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}
