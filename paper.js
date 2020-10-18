class Paper{

    constructor(x,y,radius){
       
       var options={
           
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

       }

       this.body = Bodies.circle(x,y,radius,options);
       World.add(world,this.body);
   }

   display()
   {
      fill("pink");

      Matter.Bodies.circle(x,y,radius,options);

      ellipseMode(RADIUS);
      ellipse(paper.position.x , paper.position.y , 15,15 );

      
   }
}