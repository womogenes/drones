const _draw = () => {
  p.background(20);

  for (let d of drones) {
    d.navigate(new p5.Vector(p.mouseX, p.mouseY));
  }

  for (let d of drones) {
    d.update();
  }

  drones = drones.filter(d => {
    if (d.health > 0) return true;
  });

  for (let l of launchers) { l.update(); }
  for (let t of targets) { t.update(); }

  for (let l of launchers) { l.display(); }
  for (let d of drones) { d.display(); }
  for (let t of targets) { t.display(); }
};