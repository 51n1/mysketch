let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  particles[0] = new Particle();
  particles[1] = new Particle(150, 50);
  let v = createVector(200,100);
  particles[2] = new Particle(v);
  particles[3] = new Particle("100,300");
}

function draw() {
  background(0);
  for (let p of particles) {
    p.show();
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function Particle(a, b) {
  if (a instanceof p5.Vector) {
    this.x = a.x;
    this.y = a.y;
  } else if (typeof(a) === "string") {
    let nums = a.split(',');
    this.x = Number(nums[0]);
    this.y = Number(nums[1]);
  } else {
    this.x = a || 100;
    this.y = b || 100;
  }

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }
}

// function sum(arr) {
//   if (arr instanceof Array) {
//     let val = 0;
//     for (let number of arr) {
//       val += number;
//     }
//     return val;
//   }
//
//   let val = 0;
//   for (let number of arguments) {
//     val += number;
//   }
//   return val;
// }

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
