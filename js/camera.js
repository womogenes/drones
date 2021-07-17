let camera;

const screenToSpace = (x, y) => {
  return new Vector(
    x / camera.zoom - camera.x,
    y / camera.zoom - camera.y
  );
};

const setupCamera = () => {
  camera = {
    tox: WIDTH / 2,
    toy: HEIGHT / 2,
    x: WIDTH / 2,
    y: HEIGHT / 2,
    zoom: 1,
    minzoom: 0.2,
    maxzoom: 10,
    tozoom: 1,
    dzoom: 0.5,
    xOffset: 0,
    yOffset: 0
  };
};

const updateCamera = () => {
  camera.tozoom = Math.max(Math.min(camera.tozoom, camera.maxzoom), camera.minzoom);
  camera.x = p.lerp(camera.x, camera.tox, .1);
  camera.y = p.lerp(camera.y, camera.toy, .1);
  camera.zoom = p.lerp(camera.zoom, camera.tozoom, .1);
};