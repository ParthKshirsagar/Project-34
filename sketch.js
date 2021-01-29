const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;

var timeDragged;

var ground1, ground2;
var superhero;
var monster;
var bg1;
var constraint;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29;
var boxGroup;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(1350, 500);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(337.5, 325, 675, 7);

  superhero = new Superhero(300, 200, 140, 75);

  bg1 = new bg(675, 250, 3, 3);

  // one
  b1 = new box(440, 325);
  b2 = new box(440, 312.5);
  b3 = new box(440, 300);
  b4 = new box(440, 287.5);
  b5 = new box(440, 275);
  b6 = new box(440, 262.5);

  //two
  b7 = new box(500, 325);
  b8 = new box(500, 312.5);
  b9 = new box(500, 300);
  b10 = new box(500, 287.5);
  b11 = new box(500, 275);
  b12 = new box(500, 262.5);
  b13 = new box(500, 237.5);

  //three
  b14 = new box(560, 325);
  b15 = new box(560, 312.5);
  b16 = new box(560, 300);
  b17 = new box(560, 287.5);
  b18 = new box(560, 375);
  b19 = new box(560, 362.5);
  b20 = new box(560, 250);
  b21 = new box(560, 325);

  //four
  b22 = new box(620, 325);
  b23 = new box(620, 312.5);
  b24 = new box(620, 300);
  b25 = new box(620, 287.5);
  b26 = new box(620, 275);
  b27 = new box(620, 262.5);
  b28 = new box(620, 237.5);
  b29 = new box(620, 200);

  constraint = new chain(superhero.body, {x: 300, y: 5});

  monster = new Monster(750, 275, 35, 130);
  ground2 = new ground(750, 325, 50, 7)

  timeDragged = 1;

  Engine.run(engine);
}

function draw() {
  background("white");

  Engine.update(engine);

  bg1.display();

  ground1.display();
  ground2.display();
  
  superhero.display();
  monster.display();
  
  if(b2 && b3 && b4 && b5 && b6 && b8 && b9 && b10 && b11 && b12 && b13 && b15 && b16 && b17 && b20 && b23 && b24 && b25 && b26 && b27 && b28 && b29){
  //one
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  //two
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();

  //three
  b15.display();
  b16.display();
  b17.display();
  b20.display();

  //four
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  }
   
  if(timeDragged<=0 && monster.body.position.y<500 && frameCount>500){
    textSize(25);
    fill("yellow");
    strokeWeight(3);
    stroke("red")
    text("Oops, you were unable to defeat the monster", 350, 75);
    b1 = null;
    b2 = null;
    b3 = null;
    b4 = null;
    b5 = null;
    b6 = null;
    b7 = null;
    b8 = null;
    b9 = null;
    b10 = null;
    b11 = null;
    b12 = null; 
    b13 = null;
    b14 = null;
    b15 = null;
    b16 = null;
    b17 = null;
    b18 = null;
    b19 = null;
    b20 = null;
    b21 = null;
    b22 = null;
    b23 = null;
    b24 = null;
    b25 = null;
    b26 = null; 
    b27 = null;
    b28 = null;
    b29 = null;
  }
  else if(monster.body.position.y>500){
    textSize(25);
    fill("yellow");
    strokeWeight(3);
    stroke("red");
    text("Well Done!! You have defeated the monster", 350, 75);  
    b1 = null;
    b2 = null;
    b3 = null;
    b4 = null;
    b5 = null;
    b6 = null;
    b7 = null;
    b8 = null;
    b9 = null;
    b10 = null;
    b11 = null;
    b12 = null; 
    b13 = null;
    b14 = null;
    b15 = null;
    b16 = null;
    b17 = null;
    b18 = null;
    b19 = null;
    b20 = null;
    b21 = null;
    b22 = null;
    b23 = null;
    b24 = null;
    b25 = null;
    b26 = null; 
    b27 = null;
    b28 = null;
    b29 = null;
  }

}

function mouseDragged(){
  if(timeDragged>0){
  Matter.Body.setPosition(superhero.body, {x: mouseX, y: mouseY});
  }
}

function mouseReleased(){
  timeDragged = timeDragged - 1;
}