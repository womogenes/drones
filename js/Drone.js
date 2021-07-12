class Drone {
  constructor(pos, vel, target) {
    this.pos = pos;
    this.vel = vel;
    this.maxSpeed = 3;
    this.maxForce = 0.1;
    this.target = target;
    this.health = 1;
  }

  navigate() {
    let predictedPos = Vector.add(
      this.target.pos,
      Vector.mult(
        this.target.vel, 
        p.dist(this.pos.x, this.pos.y, this.target.pos.x, this.target.pos.y) 
          / this.vel.mag() * 1
      )
    );

    p.ellipse(predictedPos.x, predictedPos.y, 10);

    let desiredVel = Vector.sub(predictedPos, this.pos);

    let acc = Vector.sub(desiredVel, this.vel).limit(this.maxForce);
    this.vel.add(acc);
    this.vel.limit(this.maxSpeed);
  }

  update() {
    this.pos.add(this.vel);
  }

  display() {
    p.stroke(255);
    p.noFill();

    p.push();
    p.translate(this.pos.x, this.pos.y);
    p.rotate(this.vel.heading());
    p.triangle(10, 0, -5, -5, -5, 5);
    p.pop();
  }
}