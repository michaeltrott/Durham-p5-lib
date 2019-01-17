/////////////////////////////////////////////////////////////////////////////////////////////////////
// Particle Simulation 																			   //
// These are the global variables. 																   //
// Particles is a list of objects that contains all of the objects. 							   //
// massSize is used to control the size of the particles. 										   //
//  									   														   //
/////////////////////////////////////////////////////////////////////////////////////////////////////
var particles = [];
var massSize = 0.02;
var maxspeed = 0.5;
/////////////////////////////////////////////////////////////////////////////////////////////////////
// The setup function creates the canvas, sets the frame rate and also controls the colour of the  //
// particles. This function is called at the start and also when the 'Randomise Colour' button is  //
// pressed.																						   //
/////////////////////////////////////////////////////////////////////////////////////////////////////
function setup() {
	var canvas = createCanvas(windowWidth - 50, windowHeight - 100);
	frameRate(60);
	fill((random(50, 255)), (random(50, 255)), (random(50, 255)), (random(50, 255)));
	noStroke();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
// The mouseClicked function is used to run the addNewParticle function, so to create a new object,//
// once the mouse has been clicked.
/////////////////////////////////////////////////////////////////////////////////////////////////////
function mouseClicked() {
	addNewParticle();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
// The mouseDragged function calls the same function as the mouseClicked function, but allows the  //
// user to create objects much faster, by holding down the mouse left click button.				   //
/////////////////////////////////////////////////////////////////////////////////////////////////////
function mouseDragged() {
	addNewParticle();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
// The increaseSize function calls the increaseSize setter in the Particle class. Which will       //
// increase the size of the particles. This function is called when the 'Increase Size' button is  //
// pressed.													   									   //
/////////////////////////////////////////////////////////////////////////////////////////////////////
function increaseSize() {
	for (var i=0; i < 1; i++){
		particles[i].increaseSize();
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
// The decreaseSize function calls the decreaseSize setter in the Particle class. Which will       //
// decrease the size of the particles. This function is called when the 'Decrease Size' button is  //
// pressed.													   									   //
/////////////////////////////////////////////////////////////////////////////////////////////////////
function decreaseSize() {
	for (var i=0; i < 1; i++){
		particles[i].decreaseSize();
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
// The addnewParticle function is used solely to create the particle objects and also to add the   //
// objects to the particles list, so that they can be referenced.								   //
/////////////////////////////////////////////////////////////////////////////////////////////////////
function addNewParticle() {
	for (var i=0; i < 1; i++){
		var p = new Particle(mouseX, mouseY, maxspeed, maxspeed, massSize);
		particles.push(p);
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
// The draw function is used for setting the velocities, force and acceleration based off of where //
// each other particle is in comparison to others. It also then calls the draw function in the 	   //
// Particle class.																				   //
/////////////////////////////////////////////////////////////////////////////////////////////////////
function draw() {
	background(0);
	for (var i = 0; i < particles.length; i++) {
		var accelerationX = 0, accelerationY = 0;
		for (var j = 0; j < particles.length; j++) {
			if (particles[i] != particles[j]) {
				var distanceX = particles[j].positionX - particles[i].positionX;
				var distanceY = particles[j].positionY - particles[i].positionY
				var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
				if (distance < 1) distance = 1;
				var force = (distance - 320) * particles[j].mass / distance;
				accelerationX += force * distanceX;
				accelerationY += force * distanceY;
			}
		}
		particles[i].velocityX = particles[i].velocityX * 0.009 + accelerationX * particles[i].mass;
		particles[i].velocityY = particles[i].velocityY * 0.009 + accelerationY * particles[i].mass;
	}
	for (var i = 0; i < particles.length; i++) {
		particles[i].positionX += particles[i].velocityX;
		particles[i].positionY += particles[i].velocityY;
		particles[i].draw()
}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////