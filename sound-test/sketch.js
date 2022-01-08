// Reference: {URL}https://yoppa.org/sfc-design20/11750.html
// Demo: https://51n1.github.io/mysketch/{NAME}/
let sound;
let fft;
let mic;

function preload(){
  sound = loadSound('./test-sound.mp4')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 256, 256, 256);
  sound.loop();

  // mic = new p5.AudioIn();
  // mic.start();


  fft = new p5.FFT(0.1, 4096);
  fft.setInput(sound);
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(ADD);

  let spectrum = fft.analyze();

  // Line White
  // noFill();
  // stroke(255);
  // beginShape();
  // for (let i = 0; i < spectrum.length; i++){
  //   //print(spectrum[i]); // 0 - 255
  //   let x = map(log(i), 0, log(spectrum.length), 0, width);
  //   let y = map(pow(spectrum[i], 2), 0, pow(255, 2), height, 0);
  //   vertex(x, y);
  // }
  // endShape();

  // Rect Color
  // noStroke();
  // for (let i = 0; i < spectrum.length; i++){
  //   //print(spectrum[i]); // 0 - 255
  //   let x1 = map(log(i), 0, log(spectrum.length), width/2, width);
  //   let w1 = map(log(i+1), 0, log(spectrum.length), width/2, width) - x1 + 1;
  //   let x2 = map(log(i), 0, log(spectrum.length), width/2, 0);
  //   let w2 = map(log(i+1), 0, log(spectrum.length), width/2, 0) - x2 - 1;
  //   let h = map(log(i), 0, log(spectrum.length), 0, 360);
  //   let b = map(pow(spectrum[i], 2), 0, pow(255, 2), 0, 255);
  //   fill(h, 255, b);
  //   rect(x1, 0, w1, height);
  //   rect(x2, 0, w2, height);
  // }

  // Circle Color
  noStroke();
  for (let i = 0; i < spectrum.length; i++){
    //print(spectrum[i]); // 0 - 255
    let x1 = map(log(i), 0, log(spectrum.length), width/2, width);
    let x2 = map(log(i), 0, log(spectrum.length), width/2, 0);
    let h = map(log(i), 0, log(spectrum.length), 0, 360);
    let diameter = map(pow(spectrum[i], 2), 0, pow(255, 2), 0, height);
    fill(h, 255, 255, 32);
    circle(x1, height/2, diameter);
    circle(x2, height/2, diameter);
  }


  // if (touches.length > 1) saveCanvas();
  // save(frameCount+".png");
}

// function keyPressed() {
//   if (keyCode === ENTER) saveCanvas();
// }
//
// function touchMoved() {
//   return false;
// }
//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
