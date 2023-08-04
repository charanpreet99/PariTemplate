var trex;
var trex_animation;
var edges;

function preload(){
trex_animation = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
    createCanvas(600,200);
    trex = createSprite(50,160,10,50);
    trex.addAnimation("trex_running",trex_animation);
    trex.scale = 0.6;

    edges = createEdgeSprites();
}

function draw(){
 background("teal");

 if(keyDown("space")){
    trex.velocityY = -8;
 }

 trex.velocityY = trex.velocityY + 0.1;
 trex.collide(edges[3]);

 drawSprites();
}