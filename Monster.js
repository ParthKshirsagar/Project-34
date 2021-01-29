class Monster{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image1 = loadImage("Monster-01.png");
        this.image2 = loadImage("Monster-02.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        if(this.body.speed<3){
        image(this.image1, this.body.position.x, this.body.position.y, 225, 225);
        }
        else if(this.body.speed>3){
            image(this.image2, this.body.position.x, this.body.position.y, 225, 225);
        }
    }
}