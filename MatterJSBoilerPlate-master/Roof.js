class Roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h

//creation of the bodies and adding it to the world...

		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}

	display() {

	//the variable for the abbreviation of of the body's position from the Roof class...

	var groundPosition=this.body.position;		
    
	push()
			translate(groundPosition.x, groundPosition.y);
			rectMode(CENTER)
			fill(128,128,128);
			rect(0,0,this.w, this.h);
			pop()
			
    }
}