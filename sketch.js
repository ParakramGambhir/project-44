
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thief, police, car, bullet;
var thiefPic, policePic, carPic, bulletPic;

function preload()
{
	thiefPic= loadImage("images/thief.png.jpg");
    carPic= loadImage("images/car.png");
    policePic= loadImage("images/police.jpg");
	bulletPic= loadImage("images/bullet.svg");
}

function setup() {
	createCanvas(800, 700);
      thief = createSprite(80, 350, 20,20)
	  thief.addImage("thiefPic", player)

	  car = createSprite(80, 350, 20,20)
	  car.addImage("carPic", vehicle)

	  police = createSprite(80, 350, 20,20)
	  police.addImage("policePic", throwObstacles)

	  bullet = createSprite(80, 350, 20,20)
	  bullet.addImage("buletPic", obstacle)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



