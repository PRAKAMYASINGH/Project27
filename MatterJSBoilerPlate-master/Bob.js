class Bob
{
	constructor(x,y,r) {
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
	}
            //the reference abbreviation for the bodies in the class...
		this.x=x;
		this.y=y;
		this.r=r
		
        // creation of the bodies for the cradle...

		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);

		//adding the bodies to the world...

        World.add(world, this.body);

	}
    
    // the display function to display the class that is to be written in sketch.js ...
	display() {
	
var bobpos=this.body.position;
			push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER)
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

