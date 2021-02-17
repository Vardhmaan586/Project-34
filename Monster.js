class Monster{
    constructor(x,y,radius){
        
        var options = {
            isStatic : false,
            density : 2
        }

        this.body = Bodies.circle(x,y,radius,options);

        this.radius = radius;

        this.image = loadImage("Monster-01.png")

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        imageMode(CENTER);
        image(this.image,pos.x,pos.y+75,this.radius,this.radius);
    }
}