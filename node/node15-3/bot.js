// 15.6 - Twitter Bot Tutorial by Daniel Shiffman

console.log('The p5 bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
var exec = require('child_process').exec;
var fs = require('fs');

tweetIt();
// setInterval(tweetIt, 1000*20);

function tweetIt() {
  var cmd = 'processing-java --sketch=`pwd`/circles --run';
  exec(cmd, processing);

  function processing() {
    var filename = 'circles/output.png';
    var params = {
      encoding: 'base64'
    }
    var b64 = fs.readFileSync(filename, params);
    T.post('media/upload', {media_data: b64 }, uploaded);

    function uploaded(err, data, response) {
      var id = data.media_id_string;
      var tweet = {
        status: 'p5 image by p5 bot from node.js',
        media_ids: [id]
      }
      T.post('statuses/update', tweet, tweeted);
    }
    function tweeted(err, data, response) {
      if (err) {
        console.log("Something went wrong!");
      } else {
        console.log("It worked!");
      }
    }
  }
}
