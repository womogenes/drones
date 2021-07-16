const _draw = () => {
  p.background(20);

  // Updates
  base.update();
  enemy.update();

  updateCollisions();
  for (let e of explosions) { e.update(); }
  explosions = explosions.filter(e => e.opacity > 0);

  // Display everything
  updateCamera();

  // Outside-transformation stuff
  drawGrid();

  // Inside-transformation stuff  
  p.push();
  p.translate(camera.x, camera.y);
  p.scale(camera.zoom);

  base.display();
  enemy.display();

  for (let e of explosions) { e.display(); }

  p.pop();

  // More outside-transformation stuff
  p.strokeWeight(20);
  p.stroke(64);
  p.line(50, 50, WIDTH - 50, 50);
  p.strokeWeight(10);
  p.stroke(0);
  let length = Math.max(0, (WIDTH - 100) * base.health);
  p.line(50, 50, 50 + length, 50);
  p.stroke(200);
  p.line(50, 50, 50 + length, 50);
};