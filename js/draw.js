const _draw = () => {
  p.background(20);

  drones = drones.filter(d => {
    if (d.health > 0) return true;
  });

  for (let d of drones) {
    d.navigate(new p5.Vector(p.mouseX, p.mouseY));
  }

  for (let l of launchers) { l.update(); }
  for (let t of targets) { t.update(); }
  for (let d of drones) { d.update(); }

  // Display everything
  updateCamera();

  // Outside-transformation stuff
  drawGrid();

  // Inside-transformation stuff  
  p.push();
  p.translate(camera.camx, camera.camy);
  p.scale(camera.zoom);

  p.ellipse(0, 0, 20, 20);

  for (let l of launchers) { l.display(); }
  for (let d of drones) { d.display(); }
  for (let t of targets) { t.display(); }

  p.pop();
};