
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObject,groundObject,paper,dustbin,ground
var world

function preload()
{
	
paperObject=loadImage("paper.png")
dustbinObj=loadImage("dustbingreen.png")


}

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

dustbinObj= new dustbin(1200,650)
	paperObject= new paper(200,450,40)
	groundObject= new ground(width/2,670,idth,20)
  

dustbin1= new Dustbin(480,650,200,20)
dustbin2= new Dustbin(380,620,20,100)
dustbin3= new Dustbin(580,620,20,100)
ground= new Ground(width/2, height-35, width,10)
paper= new Paper(340,640,34)


var render=Render.create({

	element:document.body,
	engine :engine,
options :{
width :1200,
height :700,
wireframes: false


}



}

)

Engine.run(engine);

}



function draw() {
  rectMode(CENTER);
  background(0);
  
  
paper.display()
dustbin1.display()
ground.display()

}

function keyPressed(){

	if(keyCode (UP_ARROW)){

Matter.Body.applyForce(paper.body,paper.body.position,{x : 85 ,y:-85})
		
	}
	

}

