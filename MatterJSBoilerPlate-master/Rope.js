class Rope {

    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}  
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }

    display() {
	
        //The variables for the abbreviation of the rope's bodies' position...

		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

//the anchor that will have the X and Y position of pointA...

		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

 //the anchor 2X & 2Y wil have the pointB's X & Y position and the offset's X & Y positon...

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY

        //the line instruction to attach everything...

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}

}


