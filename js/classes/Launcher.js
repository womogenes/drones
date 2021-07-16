class Launcher {
  constructor(pos, dir, team) {
    this.pos = pos;
    this.dir = dir;
    this.team = team;
  }

  update() {
    if (p.frameCount % 9999 === 1) {
      drones.push(new Drone(
        this.pos.copy(),
        Vector.fromAngle(this.dir).mult(2).add(Vector.random2D().mult(2)),
        new Vector(p.mouseX, p.mouseY)
      ));
    }
  }

  display() {
    p.noFill();
    p.push();
    p.translate(this.pos.x, this.pos.y);
    p.rotate(this.dir);
    p.beginShape();
    p.vertex(-10, 10);
    p.vertex(10, 5);
    p.vertex(10, -5);
    p.vertex(-10, -10);
    p.endShape(p.CLOSE);
  }
}