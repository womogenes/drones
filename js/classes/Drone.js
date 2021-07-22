class Drone {
  constructor(pos, vel, target) {
    this.pos = pos;
    this.vel = vel;
    this.maxSpeed = 5;
    this.maxForce = 0.1;
    this.health = 1;
    this.target = target;
  }

  navigate(targetPos, targetVel) {
    // Static vs moving target
    let predictedPos;
    if (!targetVel) {
      predictedPos = targetPos;
    } else {
      predictedPos = Vector.add(
        targetPos,
        Vector.mult(
          targetVel,
          p.dist(this.pos.x, this.pos.y, targetPos.x, targetPos.y) 
            / (this.vel.mag() + 1) * 0.5
        )
      );
    }

    let desiredVel = Vector.sub(predictedPos, this.pos);

    let acc = Vector.sub(desiredVel, this.vel).limit(this.maxForce);
    this.vel.add(acc);
  }

  update() {
    if (true || !this.target || this.target.health <= 0) {
      this.target = Drone.locateClosestEnemy(this.pos);
    }

    if (this.target === null) {
      this.navigate(base.pos, null);
    } else {
      this.navigate(this.target.pos, this.target.vel);
    }

    // Separate
    for (let d of base.drones) {
      if (d == this) continue;
      let dist = p.dist(d.pos.x, d.pos.y, this.pos.x, this.pos.y);
      if (dist < 20) {
        let toAdd = Vector.sub(this.pos, d.pos).div(dist * dist);
        this.vel.add(toAdd);
      }
    }

    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }

  static locateClosestEnemy(pos) {
    // Find closest enemy drone
    let minDist = Infinity;
    let closestEnemy = null;
    for (let d of enemy.drones) {
      let dist = p.dist(pos.x, pos.y, d.pos.x, d.pos.y);
      if (dist < minDist) {
        minDist = dist;
        closestEnemy = d;
      }
    }

    return closestEnemy;
  }

  display() {
    p.stroke(255);
    p.fill('#61b5ff80');
    p.strokeWeight(1);

    p.push();
    p.translate(this.pos.x, this.pos.y);
    p.rotate(this.vel.heading());
    p.triangle(10, 0, -5, -5, -5, 5);
    p.pop();
  }
}