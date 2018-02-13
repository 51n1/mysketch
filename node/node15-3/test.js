var fs = require('fs');
fs.readFile('number.txt', { encoding: 'utf-8' }, function (err, data) {
  var num = parseInt(data);
  num += 1;
  console.log(num);
  fs.writeFile('number.txt', num, function(err, data){});
});

// fs.writeFile('number.txt', num);
