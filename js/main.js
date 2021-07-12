/*
 * Stuff to add:
 *  1. FLocking behavior (separation)
 *  2. Collisions reduce health or smth
 */

// Oops
let Vector = p5.Vector;
let x = p.random();

// Graphical stuff
let WIDTH = 1200;
let HEIGHT = 500;
let gridSize = 100;

// Useful stuff :P
let drones = [];
/*
for (let i = 0; i < 10; i++) {
  drones.push(new Drone(
    new p5.Vector(p.random(0, WIDTH), p.random(0, HEIGHT)),
    new p5.Vector(p.random(-1, 1), p.random(-1, 1)),
    new p5.Vector(p.random(100, WIDTH - 100), p.random(100, HEIGHT - 100))
  ));
}
*/
drones.push(new Drone(
  new p5.Vector(-WIDTH/2 + 50),
  p5.Vector.random2D(),
  null
));

let launchers = [];
/*
launchers.push(new Launcher(
  new p5.Vector(20, HEIGHT / 2),
  0
));
*/

let targets = [];
targets.push(new Target(
  new p5.Vector(0, 0)
));
drones[0].target = targets[0];