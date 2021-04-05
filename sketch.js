const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var ground,bat, ball, hole,rope;

function setup(){
 var canvas =  createCanvas (1200,400);

    engine=Engine.create ();
    world= engine.world;

ground=new Ground(600,380,1200,10);
bat = new Bat (230,375,10,80);

ball= new Ball (240,100,20,20);

hole = new Hole(550,100,30,30);

rope = new SlingShot(bat.body,{x:230,y:375});
}
function draw(){
    background("black");
Engine.update(engine);

ground.display();
bat.display();
ball.display();

hole.display();

rope.display();
}

function mouseDragged() {
Matter.Body.setPosition(bat.body,{x:mouseX,y:mouseY});

}

function mouseReleased() {
    rope.fly();
}