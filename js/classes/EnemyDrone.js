class EnemyDrone extends Drone {
  constructor(pos, vel, target) {
    super(pos, vel, target);
  }

  update() {
    this.navigate(base.pos, null);
    this.pos.add(this.vel);
  }

  display() {
    p.stroke(255);
    p.fill('#f76d6d80');
    p.strokeWeight(1);

    p.push();
    p.translate(this.pos.x, this.pos.y);
    p.rotate(this.vel.heading());
    p.triangle(10, 0, -5, -5, -5, 5);
    p.pop();
  }
}