class box{
    constructor(x, y){
        var options ={
            'restitution': 0.8,
            'friction': 1,
            'density': 20
        }
        this.body = Bodies.rectangle(x, y, 25, 25, options);
        this.width = 25;
        this.height = 25;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        stroke("brown");
        strokeWeight(4);
        fill("red");
        rect(pos.x, pos.y, 25, 25);
    }
}