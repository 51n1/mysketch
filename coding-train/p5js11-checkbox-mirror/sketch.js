// 11.5: Checkbox Mirror - p5.js Tutorial by Daniel Shiffman

let video;
let slider;

let cols = 40;
let rows = 40;

let boxes = [];

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(cols, rows);
  slider = createSlider(0, 255, 77);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let box = createCheckbox();
      box.parent('mirror');
      boxes.push(box);
    }
    let linebreak = createSpan('<br/>');
    linebreak.parent('mirror');
  }
}

function draw() {

  video.loadPixels();

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (video.width - x + 1 + ( y * video.width )) * 4;
      let r = video.pixels[index+0];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];

      let bright = (r+g+b)/3;

      let threshold = slider.value();

      let checkIndex = x + y * cols;

      if (bright > threshold) {
        boxes[checkIndex].checked(false);
      } else {
        boxes[checkIndex].checked(true);
      }
    }
  }

  // if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

// function touchMoved() {
//   return false;
// }
//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
