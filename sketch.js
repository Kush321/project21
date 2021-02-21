var canvas;
var music;
var box1,box2,box3,box4;
var boxsprite;
var wall1,wall2,wall3;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(80,600,190,20);
box1.shapeColor="blue";
box2=createSprite(295,600,190,20);
box2.shapeColor="orange";
box3=createSprite(505,600,190,20);
box3.shapeColor="red";
box4=createSprite(720,600,190,20);
box4.shapeColor="green";
boxsprite=createSprite(random(50,750),200,25,25);
boxsprite.shapeColor="white";
boxsprite.velocityX=2;
boxsprite.velocityY=5;
wall1=createSprite(0,300,5,600);
wall2=createSprite(800,300,5,600);
wall3=createSprite(400,0,800,5);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    if(boxsprite.isTouching(box1)){
    boxsprite.bounceOff(box1);
    boxsprite.shapeColor="blue";
    }
    if(boxsprite.isTouching(box2)){
        boxsprite.bounceOff(box2);
        boxsprite.shapeColor="orange";
    }
    if(boxsprite.isTouching(box3)){
        boxsprite.bounceOff(box3);
        boxsprite.shapeColor="red";
    }
    if(boxsprite.isTouching(box4)){
        boxsprite.shapeColor="green";
        boxsprite.velocityX=0;
        boxsprite.velocityY=0;
        music.play();
    }
    if(boxsprite.isTouching(wall1)){
        boxsprite.bounceOff(wall1);
    }
    if(boxsprite.isTouching(wall2)){
        boxsprite.bounceOff(wall2);
    }
    if(boxsprite.isTouching(wall3)){
        boxsprite.bounceOff(wall3);
    }
drawSprites();
    //add condition to check if box touching surface and make it box
}
