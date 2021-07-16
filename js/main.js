/*
 * Stuff to add:
 *  1. FLocking behavior (separation)
 *  2. Collisions reduce health or smth
 */

// Oops
let Vector = p5.Vector;

// Graphical stuff
let WIDTH;
let HEIGHT;
let gridSize = 100;

// Useful stuff :P
let base = new Base(
  new Vector(0, 0),
  60
);
let enemy = new Enemy(60);

let explosions = [];