// "matches": ["http://*.com/*"]
// 1 chrome://extensions/
// 2 switch on "Developer mode"
// 3 Load Unpacked

console.log("Chrome Extension ready to go!");

window.addEventListener('mouseup', wordSeleccted);

function wordSeleccted() {
  let selectedText = window.getSelection().toString().trim();
  console.log(selectedText);
  if (selectedText.length > 0) {
    let message = {
      text: selectedText
    };
    chrome.runtime.sendMessage(message);
  }
}
