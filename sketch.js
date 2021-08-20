const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ground;
var divi,divi1,divi2,divi3,divi4;
var plinkos=[];
var particles=[];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  ground=new Ground(240,750,550,10);
  divi=new Division(240,680,10,150);
  divi1=new Division(160,680,10,150);
  divi2=new Division(80,680,10,150);
  divi3=new Division(320,680,10,150);
  divi4=new Division(400,680,10,150);
  
 Engine.run(engine);
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display(); 
  divi.display();
  divi1.display();
  divi2.display();
  divi3.display();
  divi4.display();
  
  for(var i = 40; i <=width; i=i+50)
 {
   plinkos.push(new Plinko(i,75));
 }
 for(var i = 15; i  <=width-10;i=i+50){
plinkos.push(new Plinko(i,175));
}
for(var i = 20; i  <=width-20;i=i+50){
plinkos.push(new Plinko(i,275));
}
for(var i = 50; i  <=width-30;i=i+50){
plinkos.push(new Plinko(i,375));
}
  for(var i =50;i < plinkos.length;i++){
    plinkos[i].display();
  }

  if(frameCount%10===0){
    particles.push(new Particle(random(width/2-10,width/2+10,),10,10));
  }
  for(var j =0;j < particles.length;j++){
    particles[j].display();
  }
  
  
}