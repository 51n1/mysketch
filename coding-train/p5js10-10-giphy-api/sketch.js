// - 10.10 The Giphy API and Javascript - p5.js Tutorial by Daniel Shiffman

let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "api_key=";
let query = "&q=game";

function setup() {
  // createCanvas(500, 500);
  noCanvas();
  let url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (let i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}

// function draw() {
//   background(0);
//
//   // if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
//   // save(frameCount+".png");
// }

// function touchMoved() {
//   return false;
// }
