// "matches": ["http://*.com/*"]
// 1 chrome://extensions/
// 2 switch on "Developer mode"
// 3 Load Unpacked

console.log("Chrome Extension ready to go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
  if (message.txt === "hello") {
    let paragraphs = document.getElementsByTagName("p");
    for (elt of paragraphs) {
      elt.style["background-color"] = "#00FFFF";
    }
  }
}
