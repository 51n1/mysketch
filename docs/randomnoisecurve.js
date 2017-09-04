// Based on The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var noiseline;
var randomline;
var imgsize;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5canvas");
  select("#p5output").html("Comparison of Randomness by Line Drawings");
  select("body").style("background-color", color(200));
  
  imgsize = width*0.33;
  noiseline = new NoiseLine(imgsize, 20);
  randomline = new RandomLine(imgsize, 20);
  background(200);
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
  //if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
}

function NoiseLine(_s, _c) {
  this.s = _s;
  this.cols = _c;
  this.y = [];
  this.ty = [];
  for (var i = 0; i < this.cols+1; i++) {
    this.y[i] = 0;
    this.ty[i] = i*10000;
  }

  this.render = function() {
    stroke(0);
    strokeWeight(1);
    fill(255,10);
    rect(-1,0,this.s+1,this.s);
    noFill();
    beginShape();
    for (var i = 0; i < this.cols+1; i++) {
      var x1 = this.s/this.cols*i;
      if(i==0||i==this.cols) curveVertex(x1, this.y[i]);
      curveVertex(x1, this.y[i]);
    }
    endShape();
  };

  this.step = function() {
    for (var i = 0; i < this.cols+1; i++) {
      this.y[i] = map(noise(this.ty[i]), 0, 1, 0, this.s);
      this.ty[i] += 0.01;
    }
  };
}

function RandomLine(_s, _c) {
  this.s = _s;
  this.cols = _c;
  this.y = [];
  for (var i = 0; i < this.cols+1; i++) {
    this.y[i] = this.s*0.5;
  }

  this.render = function() {
    stroke(0);
    strokeWeight(1);
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
      var stepy = random(-1, 1)*5;
      this.y[i] += stepy;
      this.y[i] = constrain(this.y[i],0,this.s);
    }
  };
}
