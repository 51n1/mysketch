// "matches": ["http://*.com/*"]
// 1 chrome://extensions/
// 2 switch on "Developer mode"
// 3 Load Unpacked

console.log("Chrome Extension ready to go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  if (message.txt != "") {
    let paragraphs = document.getElementsByTagName("p");
    for (elt of paragraphs) {
      elt.innerHTML = message.txt;
    }
  }
}
