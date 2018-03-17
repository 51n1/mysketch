// 16-6 Array Functions: map() and fill() - Topics of JavaScript/ES6 by Daniel Shiffman
// 16-7 Array Funcitons: reduce()
// 16-8 Array Functions: filter()

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();

  let vals = [5, 4, undefined, 2, 9];

  // 16-6
  // function doubler(x) {
  //   return x * 2;
  // }
  // vals = vals.map(doubler);
  // vals = vals.map(x => x * 2);
  // console.log(vals);

  // let vals = Array(100).fill().map(Math.random);
  // console.log(vals);

  // 16-7
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

  // 16-8
  // function isEven(num) {
  //   return (num % 2 == 0);
  // }
  // vals = vals.filter(isEven);

  // vals = vals.filter(x => !(x % 2 == 1));
  vals = vals.filter(x => x);
  console.log(vals);

  let s = "It was a  dark and stormy night. ";
  let words = s.split(/\W+/).filter(word => word.length >= 3);
  console.log(words);

}
