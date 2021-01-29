class bg{
    constructor(x, y, width, height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("GamingBackground.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 1500, 1500);
    }
}