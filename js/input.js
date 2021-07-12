const setupInput = () => {
  p.mouseDragged = () => {
    camera.tox = (p.mouseX - xOffset);
    camera.toy = (p.mouseY - yOffset);
  };

  p.mousePressed = () => {
    xOffset = p.mouseX - camera.camx;
    yOffset = p.mouseY - camera.camy;
  };

  p.mouseWheel = event => {
    let e = event.delta;

    if (e < 0) {
      if (camera.tozoom >= camera.maxzoom) return;
      camera.tox -= camera.dzoom * (p.mouseX - camera.tox);
      camera.toy -= camera.dzoom * (p.mouseY - camera.toy);
      camera.tozoom *= camera.dzoom + 1;

    } else {
      if (camera.tozoom <= camera.minzoom) return;
      camera.tox += camera.dzoom / (camera.dzoom + 1) * (p.mouseX - camera.tox); 
      camera.toy += camera.dzoom / (camera.dzoom + 1) * (p.mouseY - camera.toy);
      camera.tozoom /= camera.dzoom + 1;
    }
  };
}