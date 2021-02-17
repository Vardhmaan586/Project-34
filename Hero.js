class Hero{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);

        this.radius = radius;

        this.image = loadImage("Superhero-01.png")

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        imageMode(CENTER);
        image(this.image,pos.x,pos.y+75,this.radius,this.radius);
    }
}