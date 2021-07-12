let sketch = p => {
  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT);
  };
  p.draw = _draw;
};

let p = new p5(sketch, 'sketch-container');