// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Simple Particle System
// Edited Video: https://www.youtube.com/watch?v=UcdigVaIYAk
// 16-10: Particle System with JS Array Functions - Topics of JavaScript/ES6

let particles;

function setup() {
  createCanvas(600, 400);
  particles = Array().fill().map(p => new Particle());
}

function draw() {
  background(0);
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  

  particles.sort((a,b) => a.col - b.col);
  particles.forEach(p => p.update());
  particles.forEach(p => p.show());

  // for (let particle of particles) {
  //   particle.update();
  //   particle.show();
  // }
  particles = particles.filter(p => !p.finished());

  // let sumx = particles.reduce((x, p) => x + p.x, 0);
  // let sumy = particles.reduce((y, p) => y + p.y, 0);
  //
  // let centerX = sumx / particles.length;
  // let centerY = sumy / particles.length;

  let sumV = particles.reduce((v, p) => v.add(p.x, p.y), createVector(0, 0));
  sumV.div(particles.length);

  fill(255, 0, 0);
  ellipse(sumV.x, sumV.y, 24);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

class Particle {

  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.col = random(256);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    //stroke(255);
    // fill(255, this.alpha);
    fill(this.col);
    ellipse(this.x, this.y, 16);
  }

}

// function touchMoved() {
//   return false;
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
