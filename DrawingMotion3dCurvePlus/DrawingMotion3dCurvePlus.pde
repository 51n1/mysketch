// drawing + motion + 3D + curve
// Memory Mouse Data, Using Class + 3D.

import processing.opengl.*;

drawMotion3D dm3d;
 
void setup() {
  //size(displayWidth, displayHeight, OPENGL);
  size(1200, 800, OPENGL);
  dm3d = new drawMotion3D(1000, 8.0, 0.75);
  // numbers of line point, change values, depth of z-positions
  noFill();

  textSize(12);
}

void draw() {
  background(0);

  dm3d.display();

  text("mouse click & drag = draw line\nmouse move = rotate in 3D\n'm' = change to straight/curve\n'SPACE' = re-positioning", 5, 17);
  //saveFrame("dm3d-#####.png");
}

void mousePressed() {
  dm3d.init();
}

void mouseDragged() {
  dm3d.keep();
}

void mouseReleased() {
  if(dm3d.on == true) dm3d.off();
}

void keyPressed() {
  if(key == ' ') {
    if(dm3d.on == false) dm3d.reposition();
  }
  if(key == 'm') {
    dm3d.mode++;
  }
  if(key == 's') {
    saveFrame("dm3d-curve-#####.png");
  }
}
