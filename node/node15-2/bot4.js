// 15.7 A Bot That Replies- Twitter Bot Tutorial by Daniel Shiffman

console.log('The replier bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

// setting up a user stream
var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
  // var fs = require('fs');
  // var json = JSON.stringify(eventMsg, null, 2);
  // fs.writeFile('tweet.json', json);

  var replyto = eventMsg.in_reply_to_screen_name;
  var text = eventMsg.text;
  var from = eventMsg.user.screen_name;

  console.log(replyto + ' ' + from);

  if (replyto === 'CODEMATISM') {
    var newtweet = '@' + from + ' thank you for tweeting me!';
    tweetIt(newtweet);
  }
}

function tweetIt(txt) {

  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    } else {
      console.log("It worked!");
    }
  }
}
