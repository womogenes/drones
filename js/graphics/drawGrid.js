const drawGrid = () => {
  p.stroke(96);
  p.strokeWeight(4 * camera.zoom);

  let xstart = (camera.x) % (camera.zoom * gridSize);
  for (let x = xstart; x < WIDTH; x += gridSize * camera.zoom) {
    p.line(x, 0, x, HEIGHT);
  }

  let ystart = (camera.y) % (camera.zoom * gridSize);
  for (let y = ystart; y < HEIGHT; y += gridSize * camera.zoom) {
    p.line(0, y, WIDTH, y);
  }

  p.stroke(150);
  p.line(0, camera.y, WIDTH, camera.y);
  p.line(camera.x, 0, camera.x, HEIGHT);
};