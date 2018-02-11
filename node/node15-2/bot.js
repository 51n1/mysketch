// 15.3, 15.4 - Twitter Bot Tutorial by Daniel Shiffman

console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var params = {
  q: 'processing',
  count: 2
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
  // console.log(data);
}
