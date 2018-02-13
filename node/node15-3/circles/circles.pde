void setup() {
  size(800, 800);
  background(0, 180, 255);
  stroke(128, 50);

  colorMode(HSB, 360, 100, 100);
  float h = random(100, 300);
  for (int i = 0; i < 300; i++) {
    float x = random(50, width - 50);
    float y = h + random(-30, 30);
    fill(60, random(100), 100);
    ellipse(x, y, 24, 24);
  }
  h = random(200, 400);
  for (int i = 0; i < 300; i++) {
    float x = random(50, width - 50);
    float y = h + random(-30, 30);
    fill(0, random(50), 100);
    ellipse(x, y, 24, 24);
  }
  save("output.png");
  exit();
}
