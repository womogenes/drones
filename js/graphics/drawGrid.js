const drawGrid = () => {
  p.stroke(128);
  p.strokeWeight(1);

  let xstart = (camera.camx) % (camera.zoom * gridSize);
  for (let x = xstart; x < WIDTH; x += gridSize * camera.zoom) {
    p.line(x, 0, x, HEIGHT);
  }

  let ystart = (camera.camy) % (camera.zoom * gridSize);
  for (let y = ystart; y < WIDTH; y += gridSize * camera.zoom) {
    p.line(0, y, WIDTH, y);
  }
};