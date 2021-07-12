let camera;

const screenToSpace = (x, y) => {
  return new Vector(
    x / camera.zoom - camera.camx,
    y / camera.zoom - camera.camy
  );
};

const setupCamera = () => {
  camera = {
    tox: WIDTH / 2,
    toy: HEIGHT / 2,
    camx: WIDTH / 2,
    camy: HEIGHT / 2,
    zoom: 1,
    minzoom: 0.5,
    maxzoom: 10,
    tozoom: 1,
    dzoom: 0.5,
    tozoom: 1,
    xOffset: 0,
    yOffset: 0
  };
};

const updateCamera = () => {
  camera.tozoom = Math.max(Math.min(camera.tozoom, camera.maxzoom), camera.minzoom);
  camera.camx = p.lerp(camera.camx, camera.tox, .1);
  camera.camy = p.lerp(camera.camy, camera.toy, .1);
  camera.zoom = p.lerp(camera.zoom, camera.tozoom, .1);
};