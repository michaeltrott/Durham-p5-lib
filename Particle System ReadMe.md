# Particle System 
My particle system is an easy to use program, as it allows you to click anywhere on the canvas to create a particle. You can create many particles and these particles interact with each other in the form of gravitational pull from each other; this makes the particles collide with one another and form around the densest area of the canvas. 

# New Features!
  - Particles can now change to a random colour 
  - The mass of the particles can be changed to increase/decrease size
  - Increasing size of the particles allows for unpredictable interaction between them.

# Installation:
Installation is not required, only a web browser that has Javascript enabled, will be needed to run this. You can just run the HTML document and it will automatically run the Javascript.

# Class:
Class - Particle:
The particle class is used for creating the particle objects, the constructor requires the inputs of PositionX, PositionY, VelocityX, VelocityY and mass. 
PositionX and PositionY, is used to determine where on the canvas each particle is.VelocityX and VelocityY, is used to determine the speed and direction of each particle. The mass is used to determine the size of the particle.

constructor(positionX, positionY, velocityX, velocityY, mass)
	{
	this.positionX = positionX;
	this.positionY = positionY;
	this.velocityX = velocityX;
	this.velocityY = velocityY;
	this.mass = mass;
	}

# Setters:
increaseSize:
The increaseSize function increases the size of any new particle, or in this sense, the mass of the particle.

increaseSize() 
	{
		massSize = massSize + 0.01;
	}

decreaseSize:
The decreaseSize function decreases the size of any new particle.

decreaseSize()
	{
		if (massSize > 0.01){
			massSize = massSize - 0.01;
		}
	}

draw:
The draw function creates the ellipse using the objects attributes.

draw()
	{
		ellipse(this.positionX, this.positionY, this.mass * 1000, this.mass * 1000);
	}

# Global Functions:
setup():
The setup function creates the canvas, sets the frame rate and also controls the colour of the particles. This function is called at the start and also when the 'Randomise Colour' button is pressed.	

function setup() {
	var canvas = createCanvas(windowWidth - 50, windowHeight - 100);
	frameRate(60);
	fill((random(50, 255)), (random(50, 255)), (random(50, 255)), (random(50, 255)));
	noStroke();
}

mouseClicked():
The mouseClicked function is used to run the addNewParticle function, so to create a new object, once the mouse has been clicked.

function mouseClicked() {
	addNewParticle();
}

mouseDragged():
The mouseDragged function calls the same function as the mouseClicked function, but allows the user to create objects much faster, by holding down the mouse left click button.

function mouseDragged() {
	addNewParticle();
}

increaseSize():
The increaseSize function calls the increaseSize setter in the Particle class. Which will increase the size of the particles. This function is called when the 'Increase Size' button is pressed.	

function increaseSize() {
	for (var i=0; i < 1; i++){
		particles[i].increaseSize();
	}
}

decreaseSize():
The decreaseSize function calls the decreaseSize setter in the Particle class. Which will decrease the size of the particles. This function is called when the 'Decrease Size' button is pressed.

function decreaseSize() {
	for (var i=0; i < 1; i++){
		particles[i].decreaseSize();
	}
}

addNewParticle():
The addnewParticle function is used solely to create the particle objects and also to add the objects to the particles list, so that they can be referenced.	

function addNewParticle() {
	for (var i=0; i < 1; i++){
		var p = new Particle(mouseX, mouseY, maxspeed, maxspeed, massSize);
		particles.push(p);
	}
}

draw():
The draw function is used for setting the velocities, force and acceleration based off of where each other particle is in comparison to others. It also then calls the draw function in the Particle class.	

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

# Planned Features:
 - I did try to add a feature that would change the shape of the particle to a rectangle, however I couldn't get it to work properly, as I placed an if statement in the draw function originally, to check if a variable "Shape" was ellipse or rectangle and would draw that shape instead. However the Shape variable would change, in another function, it wouldn't register the new change in the for loop. 

# Licensing:
"Wobbly Swarm" by Konstantin Makhmutov
http://www.openprocessing.org/sketch/492096
Licensed under Creative Commons Attribution ShareAlike
https://creativecommons.org/licenses/by-sa/3.0
https://creativecommons.org/licenses/GPL/2.0/

