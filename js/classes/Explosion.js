class Explosion {
  constructor(pos) {
    this.pos = pos;
    this.size = 0;
    this.opacity = 255;
  }

  update() {
    this.size += 2;
    this.opacity -= 10;
  }

  display() {
    p.noStroke();
    p.fill(255, this.opacity * 0.5);
    p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}