// - 10.5 Working with APIs in Javascript - p5.js Tutorial by Daniel Shiffman

let weather;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=1df9567081dc2f8652bba4107c2f7d27", gotData);
}

function gotData(data) {
  console.log(data);
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    ellipse(200, 150, weather.main.temp);
    ellipse(400, 150, weather.main.humidity);
  }

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}
