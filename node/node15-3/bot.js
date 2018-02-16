// 15.6 - Twitter Bot Tutorial by Daniel Shiffman

var cron = require('node-cron');
console.log('cron is starting');
cron.schedule('0 0 0,12 * * *', () => {//second, minute, hour, day, month, weekday

  console.log('The p5 bot is starting');

  var Twit = require('twit');

  var config = require('./config');
  var T = new Twit(config);
  var exec = require('child_process').exec;
  var fs = require('fs');

  tweetIt();
  // setInterval(tweetIt, 1000*20);

  function tweetIt() {
    var inames = ['circles', 'polka_dots'];
    var iname = inames[Math.floor(Math.random() * inames.length)];
    // var cmd = 'processing-java --sketch=`pwd`/' + iname + ' --run';
    var cmd = iname + '/' + iname;
    exec(cmd, processing);

    function processing() {
      var filename = iname + '/output.png';
      var params = {
        encoding: 'base64'
      }
      var b64 = fs.readFileSync(filename, params);
      T.post('media/upload', {media_data: b64 }, uploaded);

      function uploaded(err, data, response) {
        var fs = require('fs');
        var num;
        var id = data.media_id_string;
        fs.readFile('number.txt', { encoding: 'utf-8' }, function(err, data) {
          num = parseInt(data);
          num += 1;
          fs.writeFile('number.txt', num, function(err, data){});
          var tweet = {
            status: 'No.' + num + ': p5 image, "' + iname + '" by p5 bot from node.js',
            media_ids: [id]
          }
          T.post('statuses/update', tweet, tweeted);
        });
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

});
