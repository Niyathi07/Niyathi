
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var log1 , log2 , log3;
var ground;
var paper;




function preload()
{
	
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }
  ground = Bodies.rectangle(300,390,1200,5,ground_options);
  World.add(world,ground);

  log1 = new Log(900,390,200,10);
  log2 = new Log(800,340,10,100);
  log3 = new Log(1000,340,10,100);

  paper = new Paper(500,360,15);

  Engine.run(engine);

  
  
}


function draw() {
   background(0);

   rectMode(CENTER);
   
   Engine.update(engine);
   

   log1.display();
   log2.display();
   log3.display();
   
   paper.display();
  
   ground.display();
  
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper,paper.position, {x:85,y:-85})
}

}



