// - Coding Challenge #75 Wikipedia API by Daniel Shiffman

let searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="
let contentUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=";
let userInput;

let counter = 0;

function setup() {
  // createCanvas(500, 500);
  noCanvas();
  userInput = select("#userinput");
  userInput.changed(startSearch);
  // goWiki(userInput.value());

  function startSearch() {
    counter = 0;
    goWiki(userInput.value());
  }
  function goWiki(term) {
    counter = counter + 1;

    if (counter < 10) {
      // let term = userInput.value();
      let url = searchUrl + term;
      loadJSON(url, gotSearch, "jsonp");
    }
  }

  function gotSearch(data) {
    console.log(data);
    let len = data[1].length;
    let index = floor(random(len));
    let title = data[1][index];
    title = title.replace(/\s+/g, '_');
    createDiv(title);
    console.log("Querying: " + title);
    let url = contentUrl + title;
    loadJSON(url, gotContent, "jsonp");
  }

  function gotContent(data) {
    let page = data.query.pages;
    let pageID = Object.keys(data.query.pages)[0];
    console.log(pageID);
    let content = page[pageID].revisions[0]['*'];
    console.log(content);
    let wordRegex = /\b\w{4,}\b/g;
    let words = content.match(wordRegex);
    let word = random(words);
    goWiki(word);
    console.log(word);
  }
}

// function draw() {
//   // background(0);
//
//   if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
//   // save(frameCount+".png");
// }

// function touchMoved() {
//   return false;
// }
