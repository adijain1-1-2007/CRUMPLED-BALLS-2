
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;





function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
 
	
	
	
	paper=new Paper(200,450,70)
	ground1=new ground(800,670,1600,20)
	dustbin=new Dust(1000,650)
	/*var render = Render.create({
	element: document.body,	
	engine: engine,
	options: {
		width : 1600,
		height :700,
		wireframes : false
	}
	})*/
	Engine.run(engine);
	//Render.run(render);
}



function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  paper.display();
  ground1.display();
  dustbin.display();
}

function keyPressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})

}
}





