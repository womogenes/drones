// Player's base

class Base {
  constructor(pos, reload) {
    this.pos = pos;
    this.reload = reload;
    this.size = 100;

    this.health = 1;

    this.drones = [];
  }

  // Controls the base and whatnot
  update() {
    for (let d of this.drones) { d.update(); }
    this.drones = this.drones.filter(d => d.health > 0);

    if (enemy.drones.length > 0 && p.frameCount % this.reload === 1) {
      this.drones.push(new Drone(
        this.pos.copy(),
        new Vector(1, p.random(-1, 1)),
        null
      ));
    }

    // Take damageeeee
    for (let d of enemy.drones) {
      if (p.dist(this.pos.x, this.pos.y, d.pos.x, d.pos.y) <= this.size + 10) {
        this.health -= 0.01;
        d.health = 0;
        explosions.push(new Explosion(d.pos));
      }
    }
  }

  display() {
    p.stroke(255);
    p.strokeWeight(1);
    p.noFill();
    p.ellipse(this.pos.x, this.pos.y, this.size * 2, this.size * 2);

    for (let d of this.drones) { d.display(); }
  }
}