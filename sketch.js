
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var ground1;
var stone1;
var rubber1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1= new Hammer(100,100);
	stone1= new  Stone(650,600,80,80);
	ground1= new Ground (400,650,790,20);
	rubber1= new Rubber (500,650,35);
	iron1= new Iron(500,650,100,80);
	
	sand1= new Sand (50,650,10);
	sand2= new Sand (70,650,10);
	sand3= new Sand (90,650,10);
	sand4= new Sand (110,650,10);
	sand5= new Sand (130,650,10);
	sand6= new Sand (150,650,10);
	sand7= new Sand (170,650,10);
	sand8= new Sand (190,650,10);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background("white");
  

  	drawSprites();
	ground1.display();
  	hammer1.display();             
  	stone1.display();
	rubber1.display();
	sand1.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();
	iron1.display();
	
}



