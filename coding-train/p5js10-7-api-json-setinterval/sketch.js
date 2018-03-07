// - 10.7 API Query with Javascript setInterval() - p5.js Tutorial by Daniel Shiffman

let lineX = 0;
let url = "http://api.open-notify.org/iss-now.json";

let issX;
let issY;

function setup() {
  createCanvas(500, 500);
  setInterval(askISS, 1000);
}

function askISS() {
  loadJSON(url, gotData, "jsonp");
}

function gotData(data) {
  let long = data.iss_position.longitude;
  let lat = data.iss_position.latitude;
  console.log(lat + ", " + long);
  issX = map(long, -180, 180, 0, height);
  issY = map(lat, -90, 90, 0, width);
}

function draw() {
  background(0);

  fill(255);
  ellipse(issX, issY, 24, 24);

  stroke(255);
  line(lineX, 0, lineX, height);
  lineX = lineX + 5;
  if (lineX > width) {
    lineX = 0;
  }

  // if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

function touchMoved() {
  return false;
}
