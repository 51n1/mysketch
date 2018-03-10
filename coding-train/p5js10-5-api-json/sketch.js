// - 10.5 Working with APIs in Javascript - p5.js Tutorial by Daniel Shiffman
// - 10.6 API Query with User Input

let weather;
let api = "https://api.openweathermap.org/data/2.5/weather?q=";
// let city = "Kuala%20Lumpur";
let apiKey = "&APPID=1df9567081dc2f8652bba4107c2f7d27"
let units = "&units=metric"
let input;

function setup() {
  createCanvas(500, 500);
  input = select("#city");
  let submitButton = select("#submit");
  submitButton.mousePressed(weatherAsk);
  let resetButton = select("#reset");
  resetButton.mousePressed(resetInput);
}

function weatherAsk() {
  let url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  console.log(data);
  weather = data;
}

function resetInput() {
  input.value("");
}

function draw() {
  background(0);
  if (weather) {
    let temp = weather.main.temp;
    let humidity = weather.main.humidity;
    textSize(24);
    textAlign(CENTER);
    fill(255);
    text(temp + "°C", 150, 150);
    ellipse(150, 250, temp);
    text(humidity + "%", 350, 150);
    ellipse(350, 250, humidity);
  }

  // if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

// function touchMoved() {
//   return false;
// }
