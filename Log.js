class Log
{
    constructor(x, y, heighty,angle)
    {

        var boxOptions={
            restitution:0.5,
            density:1.5,
            friction:1.7
        }
        this.width=20;
        this.height=heighty;
       
        this.body=Bodies.rectangle(x,y,20,heighty,boxOptions);
        World.add(myWorld, this.body);
        Matter.Body.setAngle(this.body,angle)
    }

    display()
    {
     var angle=this.body.angle;
       // angleMode(RADIANS);
        
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
