const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bgImg;
var tower;
var towerImg;
var cannon

function preload() {
 bgImg=loadImage("assets/background.gif");
 towerImg=loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  


ground=Bodies.rectangle(600,590,1200,10,{isStatic:true});
World.add(world,ground);

tower=Bodies.rectangle(160,350,160,310,{isStatic:true});
World.add(world,tower);

angle=100
cannon=new Cannon(180,110,130,100,angle)

}

function draw() {
  background(189);
 image(bgImg,0,0,1200, 600)
  Engine.update(engine);
  cannon.display();
  rectMode(CENTER)
 
  rect(ground.position.x,ground.position.y,1200,10)
  push();
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310)
  pop();

 
}
