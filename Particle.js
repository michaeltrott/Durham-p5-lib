/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Particle Class //////////////////////////////////////
// The particle class is used for creating the particle objects.                           //
// PositionX and PositionY, is used to determine where on the canvas each particle is.     // 
// VelocityX and VelocityY, is used to determine the speed and direction of each particle. //
// The mass is used to determine the size of the particle. 								   //
/////////////////////////////////////////////////////////////////////////////////////////////
class Particle
{
	constructor(positionX, positionY, velocityX, velocityY, mass)
	{
	this.positionX = positionX;
	this.positionY = positionY;
	this.velocityX = velocityX;
	this.velocityY = velocityY;
	this.mass = mass;
	}
/////////////////////////////////////////////////////////////////////////////////////////////
// The increaseSize function increases the size of any new particle, or in this sense, the //
// mass of the particle.																   //
/////////////////////////////////////////////////////////////////////////////////////////////
	increaseSize() 
	{
		massSize = massSize + 0.01;
	}
/////////////////////////////////////////////////////////////////////////////////////////////
// The decreaseSize function decreases the size of any new particle.				       //
/////////////////////////////////////////////////////////////////////////////////////////////
	decreaseSize()
	{
		if (massSize > 0.01){
			massSize = massSize - 0.01;
		}
	}
/////////////////////////////////////////////////////////////////////////////////////////////
// The draw function creates the ellipse using the objects attributes.			           //
/////////////////////////////////////////////////////////////////////////////////////////////	
	draw()
	{
		ellipse(this.positionX, this.positionY, this.mass * 1000, this.mass * 1000);
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////