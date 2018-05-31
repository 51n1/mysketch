let userinput;
function setup() {
  noCanvas();
  userinput = select('#userinput');
  userinput.input(changeText);
}

function changeText() {

  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    // send a message to the content script
    let msg = {
      txt: userinput.value()
    }
    chrome.tabs.sendMessage(tabs[0].id, msg);
  }

}
