class Blocks{
    constructor(x,y){
       
        var options = {
         density : 0.5,
         friction : 1,
         restitution : 1
        }

        this.body = Bodies.rectangle(x,y,70,70,options);

        this.width = 70;
        this.height = 70;
        

        World.add(world,this.body);
    }
   display(){
       push();
       var pos = this.body.position;
       var angle = this.body.angle;
       translate(pos.x,pos.y);
       rotate(angle);
       fill("red");
       strokeWeight(2);
       stroke("black");
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
   }

}