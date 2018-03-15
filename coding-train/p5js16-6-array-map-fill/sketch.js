// 16-6 Array Functions: map() and fill() - Topics of JavaScript/ES6 by Daniel Shiffman

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();

  let vals = Array(100).fill().map(Math.random);

  console.log(vals);

  // function doubler(x) {
  //   return x * 2;
  // }
  // vals = vals.map(doubler);
  // vals = vals.map(x => x * 2);

  // console.log(vals);
}

// function draw() {
//   background(0);
//
//   if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
//   // save(frameCount+".png");
// }

// function touchMoved() {
//   return false;
// }
//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
