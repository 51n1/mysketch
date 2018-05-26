console.log("sketch extension start!")

let s = function(p5js) {

  p5js.setup = function() {
    document.body.style['userSelect'] = 'none';
    console.log("sketch started!");
    let h = document.body.clientHeight;
    let c = p5js.createCanvas(p5js.windowWidth, h);
    c.position(0, 0);
    c.style('pointer-events', 'none');
    p5js.clear();
  }

  p5js.draw = function() {
    p5js.stroke(255, 128, 0);
    p5js.strokeWeight(3);
    if (p5js.mouseIsPressed) {
      p5js.line(p5js.mouseX, p5js.mouseY, p5js.pmouseX, p5js.pmouseY);
    }
  }

};

let myp5 = new p5(s);
