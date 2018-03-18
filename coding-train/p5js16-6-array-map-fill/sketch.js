// 16-6 Array Functions: map() and fill() - Topics of JavaScript/ES6 by Daniel Shiffman
// 16-7 Array Funcitons: reduce()
// 16-8 Array Functions: filter()
// 16-9 Array Functions: sort()

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();

  let vals = [5, 4, 3, 2, 9];

  // 16-6 map() and fill()
  // function doubler(x) {
  //   return x * 2;
  // }
  // vals = vals.map(doubler);
  // vals = vals.map(x => x * 2);
  // console.log(vals);

  // let vals = Array(100).fill().map(Math.random);
  // console.log(vals);

  // 16-7 reduce()
  // function findMax(acc, val) {
  //   if (val > acc) {
  //     acc = val;
  //   }
  //   return acc;
  // }
  // let biggest = vals.reduce(findMax);

  let biggest = vals.reduce((a, b) => b > a ? b : a);
  console.log(biggest);

  // let sum = 0;

  // for (let i = 0; i < vals.length; i++) {
  //   sum += vals[i];
  // }

  // for (let val of vals) {
  //   sum += val;
  // }

  // function sum(acc, val) {
  //   return acc + val;
  // }
  // let answer = vals.reduce(sum);

  let sum = vals.reduce((acc, val) => acc + val);
  console.log(sum);

  // 16-8 filter()
  // function isEven(num) {
  //   return (num % 2 == 0);
  // }
  // vals = vals.filter(isEven);

  // vals = vals.filter(x => !(x % 2 == 1));
  vals = vals.filter(x => x);
  console.log(vals);

  let s = "It was a  2 dark and stormy night. ";
  let words = s.split(/\W+/).filter(word => word.length >= 1);
  console.log(words);

  // 16-9 sort()
  vals.sort();
  console.log(vals);
  // words.push(2);
  words.sort((a, b) => a.length - b.length);
  console.log(words);

  // let objs = [{
  //   x: 9,
  //   y: 1
  // }, {
  //   x: 5,
  //   y: 5
  // }];
  // function compare(a, b) {
  //   return b.y - a.y;
  // }
  // console.log(objs);
  // objs.sort(compare);
  // console.log(objs);
}
