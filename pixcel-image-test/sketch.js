// Pixel Image Test
// Shinichiro Ueki
// https://twitter.com/t51n1

var img;

function setup() {
  createCanvas(windowWidth,windowHeight);
  img = createImage(width, height);
  noLoop();
}

function draw() {
  background(200);

  img.loadPixels();
  for (var x = width/4; x < width*3/4; x+=5) {
    for (var y = height/4; y < height*3/4; y+=5) {
      img.set(x,y,color(255,0,0));
      //img.pixels[width*0.5+height*0.5*width] = color(255,0,0);
    }
  }
  img.updatePixels();
  image(img,0,0);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
}

function touchMoved() {
  return false;
}
