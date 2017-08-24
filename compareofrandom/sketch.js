// Comparison of Randomness by Line Drawings
// Modified By Shinichiro Ueki
// https://twitter.com/t51n1
//
// Based on The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var noiseline;
var randomline;
var imgsize;

function setup() {
  createCanvas(windowWidth,windowHeight);
  imgsize = width*0.33;
  noiseline = new NoiseLine(imgsize, 20);
  randomline = new RandomLine(imgsize, 20);
  background(255);
}

function draw() {
  push();
  translate(width*0.25-imgsize*0.5, height*0.5-imgsize*0.5);
  noiseline.step();
  noiseline.render();
  pop();
  push ();
  translate(width*0.75-imgsize*0.5, height*0.5-imgsize*0.5);
  randomline.step();
  randomline.render();
  pop();
  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
}

function NoiseLine(_s, _c) {
  this.s = _s;
  this.cols = _c;
  //this.x = this.s*0.5;
  //this.tx = 0;
  this.y = [];
  this.ty = [];
  for (var i = 0; i < this.cols+1; i++) {
    this.y[i] = 0;
    this.ty[i] = i*10000;
  }
  
  this.render = function() {
    stroke(0);
    fill(255,10);
    rect(0,0,this.s,this.s);
    noFill();
    for (var i = 0; i < this.cols; i++) {
      var x1 = this.s/this.cols*i;
      var x2 = this.s/this.cols*(i+1);
      line(x1, this.y[i], x2, this.y[i+1]);
    }
  };

  this.step = function() {
    for (var i = 0; i < this.cols+1; i++) {
      this.y[i] = map(noise(this.ty[i]), 0, 1, 0, this.s);
      //this.x = map(noise(this.tx),0,1,8,this.s-8);
  	  //this.y = map(noise(this.ty),0,1,8,this.s-8);
      //this.x = constrain(this.x,0,this.s-1);
      //this.y = constrain(this.y,0,this.s-1);
      this.ty[i] += 0.01;
    }
    //this.tx += 0.01;
    //this.ty += 0.01;
  };
}

function RandomLine(_s, _c) {
  this.s = _s;
  this.cols = _c;
  //this.x = this.s/2;
  this.y = [];
  for (var i = 0; i < this.cols+1; i++) {
    this.y[i] = this.s*0.5;
  }
  
  this.render = function() {
    stroke(0);
    fill(255,10);
    rect(0,0,this.s,this.s);
    noFill();
    for (var i = 0; i < this.cols; i++) {
      var x1 = this.s/this.cols*i;
      var x2 = this.s/this.cols*(i+1);
      line(x1, this.y[i], x2, this.y[i+1]);
    }
  };

  this.step = function() {
    for (var i = 0; i < this.cols+1; i++) {
      //var stepx = random(-1, 1)*5;
      var stepy = random(-1, 1)*5;
      //this.x += stepx;
      this.y[i] += stepy;
      //this.x = random(0, this.s);
      //this.y = random(0, this.s);
      //this.x = constrain(this.x,8,this.s-1-8);
      this.y[i] = constrain(this.y[i],0,this.s);
    }
  };
}

function touchMoved() {
	return false;
}
