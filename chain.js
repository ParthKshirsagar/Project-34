class chain{
    constructor(bodyA, pointA){
        var options={
            bodyA : bodyA,
            pointB : pointA, 
            length : 220, 
            stiffness : 1
        }
        this.body = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointA = pointA;
        World.add(world, this.body);
    }
    display(){
        var Body1 = this.bodyA.position;
        var point1 = this.pointA;
        line(Body1.x, Body1.y, point1.x, point1.y);
    }
}