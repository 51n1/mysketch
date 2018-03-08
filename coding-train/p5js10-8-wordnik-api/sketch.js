// - 10.8 Wordnik API and Javascript - p5.js Tutorial by Daniel Shiffman

let url1 = "http://api.wordnik.com:80/v4/word.json/";
let word = "japan";
let url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

let link;
function setup() {
  // createCanvas(500, 500);
  noCanvas();
  link = createA('#', word);
  link.mousePressed(askWordnik);
}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function gotData(data) {
  let index1 = floor(random(0, data.length));
  let index2 = floor(random(0, data[index1].words.length));
  word = data[index1].words[index2]
  link.html(word);
}

// function draw() {
//   // background(0);
//
//   // if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
//   // save(frameCount+".png");
// }

function touchMoved() {
  return false;
}
