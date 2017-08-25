// P5JS-51N1-20170523-0002 Copy
// #OOP #Vector #2Points
// Git2Go
// S.Ueki
var b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 225, 255);
  b = new Ball(color(255, 255, 100, 50));
}

function draw() {
  background(0, 225, 255, 1);
  b.update();
  b.check();
  b.display();
  if (touches.length > 1) saveCanvas();
}

function Ball(_c) {
  this.pos = createVector(width*0.5, height*0.5);
  this.fst = createVector(width*0.8, height*0.5);
  this.snd = createVector(width*0.2, height*0.5);
  this.tmp = floor(random(0, 2)) == 1 ? this.fst : this.snd;
  this.velocity = createVector(random(-0.1,0.1), random(-0.1,0.1));
  this.acceleration = createVector();
  this.c = _c;
  
  this.update = function() {
  	this.acceleration = p5.Vector.sub(this.tmp, this.pos);
    this.acceleration.setMag(0.01);
    this.velocity.add(this.acceleration);
    this.velocity.y += random(-0.05, 0.05);
    this.velocity.limit(1);
    this.pos.add(this.velocity);
    
    //print(p5.Vector.sub(this.pos, this.fst));
  };
  
  this.check = function() {
  	if(this.pos.dist(this.tmp) < 10) {
    	this.tmp = this.tmp.dist(this.fst) > this.tmp.dist(this.snd) ? this.fst : this.snd;
    	//this.velocity.setMag(1);
    }
  };
  
  this.display = function () {
  	fill(this.c);
  	stroke(128, 20);
    ellipse (this.pos.x, this.pos.y, 20, 20);
    
    stroke(0);
    point(this.pos.x, this.pos.y);
    
    noFill();
    stroke(128, 20);
    ellipse(this.fst.x, this.fst.y, 20, 20);
    ellipse(this.snd.x, this.snd.y, 20, 20);
  };
}

function touchMoved() {
	return false;
}