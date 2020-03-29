// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var engine, world;
var ground1, tanker_base;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(800, 800);

engine = Engine.create();
world = engine.world;

//ground1 = new Ground(200, 20, 400, 20);

tanker_base = new Tanker(100, 40, 100, 40, PI);

}

function draw() {
// Remember to update the Matter Engine and set the background

Engine.update(engine);

background(255, 255, 255);

//ground1.display();
tanker_base.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}