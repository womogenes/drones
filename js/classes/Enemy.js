class Enemy {
  constructor(reload) {
    // Hard-coded for now
    this.drones = [];
    this.reload = reload;
  }

  update() {
    for (let d of this.drones) { d.update(); }
    this.drones = this.drones.filter(d => d.health > 0);

    if (p.frameCount % this.reload === 1) {
      this.drones.push(new EnemyDrone(
        Vector.random2D().mult(1000),
        new Vector(-1, 0),
        base
      ));
    }
  }

  display() {
    for (let d of this.drones) { d.display(); }
  }
}