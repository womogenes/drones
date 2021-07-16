const updateCollisions = () => {
  for (let bd of base.drones) {
    for (let ed of enemy.drones) {
      if (bd === ed) continue;
      if (p.dist(bd.pos.x, bd.pos.y, ed.pos.x, ed.pos.y) < 20) {
        bd.health -= 1;
        ed.health -= 1;
        explosions.push(new Explosion(
          Vector.mult(Vector.add(bd.pos, ed.pos), 0.5)
        ));
      }
    }
  }
};