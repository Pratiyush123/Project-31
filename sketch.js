const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight=300;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Divisions(240,790,500,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j<=width; j=j+50)
  {
   plinko.push(new Plinko(j,75));
  }

}
function draw() {
  background("black"); 
  Engine.update(engine);

  //if(frameCount%60===0){ 
    //particles.push(new Particle(random(width/2-30, width/2+30), 10)); 
    
  //}

  ground.display();

  //for(var j = 0; j < particles.length; j++){

    //particles[j].display();
  //}
  for(var j = 40; j < plinko.length; j++){
    plinko[j].display(); 
  }

  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
    
  }


}