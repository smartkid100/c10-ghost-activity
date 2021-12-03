var ghost,ghost_anim;
function preload() {
  ghost_anim = loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
 createCanvas(400,400);

 ghost = createSprite(200,200,10,10);
 ghost.addAnimation("run",ghost_anim);
}

function draw(){
  background(0);
  drawSprites();
}