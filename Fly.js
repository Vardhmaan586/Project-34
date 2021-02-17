class Fly{
    constructor(bodyA,pointB){

    var options = {
      bodyA : bodyA,
      pointB : pointB,
      stiffness : 0.004,
      length : 20
    }

    this.chain = Constraint.create(options);

    World.add(world,this.chain);
}

fly(){
this.chain.bodyA = null;
}

display(){
  if(this.chain.bodyA !== null){ 
   var pointA = this.chain.bodyA.position;
   var pointB = this.chain.pointB;

   push();
   stroke("black");
   strokeWeight(0);
   line(pointA.x,pointA.y+70,pointB.x,pointB.y);
   pop();
  }
}
}