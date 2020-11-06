const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var bird;
var box2;
var box3;
var pig2;
var log2;
var box4;
var box5;
var pig3;
var log3;
var box6;
var log4;
var log5;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(600,390,1200,20);
 
    bird = new Bird(200,240);
    box2 = new Box(1000,300,50,50);
    box3 = new Box(850,300,50,50);
    pig2 = new Pig(925,300);
    log2 = new Log(925,280,PI/2,200);
    box4 = new Box(1000,250,50,50);
    box5 = new Box(850,250,50,50);
    pig3 = new Pig(925,250);
    log3 = new Log(925,230,PI/2,200);
    box6 = new Box(925,200,50,50);
    log4 = new Log(900,150,PI/7,120);
    log5 = new Log(960,150,-PI/7,130);
    


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
   
    box2.display();
    ground.display();
    bird.display();
    box3.display();
    pig2.display();
    log2.display();
    box4.display();
    box5.display();
    pig3.display();
    log3.display();
    box6.display();
    log4.display();
    log5.display();
}