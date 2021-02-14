class Hammer {
    constructor(x,y){
        var options={
            'restitution':0.5,
            'friction':1.0,
            'density':2
        }

        this.body = Bodies.rectangle(x, y, 100, 20, options);
        this.width = 100;
        this.height = 20;

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        //var angle = this.body.angle;
        push();
       // translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }

}