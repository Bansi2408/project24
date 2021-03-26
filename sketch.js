const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800,700);

  engine = Engine.create();
	world = engine.world; 
  Engine.run(engine);

  paper = new Paper(100,520, 40);
  dustbin = new Dustbin(500,650);
 
  ground = Bodies.rectangle(400,670,800,10,
    {
      isStatic: true
    });

}


function draw() {
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
 
  dustbin.display();
  paper.display();
  drawSprites();
 
}


function keyPressed() 
{ if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(paper.body,paper.body.position,
    {x:50,y:-50}); 
  }
}





