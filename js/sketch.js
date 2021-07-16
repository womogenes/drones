let sketch = p => {
  p.setup = () => {
    WIDTH = p.windowWidth;
    HEIGHT = p.windowHeight;
    p.createCanvas(WIDTH, HEIGHT);
    p.ellipseMode('center');

    setupCamera();
    setupInput();
  };
  p.draw = _draw;

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

let p = new p5(sketch, 'sketch-container');