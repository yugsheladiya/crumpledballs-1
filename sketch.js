const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var block1, block2, block3;
var paper;



/*function preload()
{
	
}*/

function setup() {
	createCanvas(1360, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Block(680, 390, 1360, 20, "red");

	block1 = new Block(920, 280, 10, 150, "yellow");
	block2 = new Block(1000, 350, 150, 10, "yellow");
	block3 = new Block(1080, 280, 10, 150, "yellow");

	paper = new Paper(200, 200);

	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();

  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x: 6.2,y: -4});
	}
}



