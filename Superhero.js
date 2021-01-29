class Superhero{
    constructor(x, y, width, height){
        var options ={
            density: 20,
            frictionAir:0.05
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Superhero-01.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 150, 150);
    }
}