class Target {
  constructor(pos) {
    this.pos = pos;
    this.vel = new Vector(0, 2);
    this.health = 1;
  }

  update() {
    this.pos.add(this.vel);
    this.vel = Vector.fromAngle(p.noise(p.frameCount / 20) * p.TWO_PI).mult(2);
  }

  display() {
    p.stroke(255);
    p.strokeWeight(1);
    p.noFill();
    p.ellipse(this.pos.x, this.pos.y, 20, 20);
  }
}