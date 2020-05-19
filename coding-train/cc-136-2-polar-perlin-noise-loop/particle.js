class Particle {
  constructor() {
    this.xNoise = new NoiseLoop(0.2, 0, width);
    this.yNoise = new NoiseLoop(0.2, 0, height);
    this.dNoise = new NoiseLoop(0.5, 100, 200);
    this.cNoise = new NoiseLoop(0.2, 200, 255);
  }

  render(a) {
    let x = this.xNoise.value(a);
    let y = this.yNoise.value(a);
    let d = this.dNoise.value(a);
    let c = this.cNoise.value(a);

    noStroke();
    fill(c);
    ellipse(x, y, d);
  }
}
