var path,dog,bone,rock,toy;
var pathImg,dogImg,boneImg,rockImg,toyImg;
var toyG,rockG,boneG
var score = 0
var endImg

var PLAY = 1
var END = 0
var gameState = 1


function preload(){

pathImg = loadImage("road1.png");
dogImg = loadImage("dog.png");
boneImg = loadImage("bone 2.png");
toyImg = loadImage("toy.png");
rockImg = loadImage("rock.png");
overImg = loadImage("you lost.png")


}


function setup() {
  createCanvas(400,600);
  // Moving background

  
    
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;

dog = createSprite(70,580,20,20);
dog.addImage(dogImg)
dog.scale=0.15;

// toy = createSprite(500,500,4,4)
// toy.addImage(toyImg)
// toy.scale=0.13

// rock = createSprite(300,400,34,4)
// rock.addImage(rockImg)
// rock.scale=0.13

// bone = createSprite(500,300,34,4)
// bone.addImage(boneImg)
// bone.scale=0.2

toyG=new Group();
rockG=new Group();
boneG=new Group();





}

function draw() {
  
  if(gameState===PLAY){
    background(0);
    dog.x = World.mouseX;
    
    edges= createEdgeSprites();
    dog.collide(edges);
    
    //code to reset the background
    if(path.y > 400 ){
      path.y = height/2;
    }
    
    createToys();
    createRocks();
    createBones();

    if(toyG.isTouching(dog)){
      toyG.destroyEach();
      score=score+355
    }
   
    else if(boneG.isTouching(dog)){
      boneG.destroyEach();
      score=score+30
    }
    else if
      (rockG.isTouching(dog)){
      rockG.destroyEach();
      gameState=END



      toyG.destroyEach();
      boneG.destroyEach();
      
      toyG.setVelocityEach(0);
      rockG.setVelocityEach(0);
      boneG.setVelocityEach(0);


  }
  

  drawSprites();
  textSize(20);
  fill(225);
  text("Score: " + score,10,30)

  }

}

function createToys(){
  if (World.frameCount % 150 == 0) {
    var toy = createSprite(Math.round(random(50, 350),40, 10, 10));
    toy.addImage(toyImg);
    toy.scale=0.12;
    toy.velocityY = 3;
    toy.lifetime = 150;
    toyG.add(toy);
    }
}

function createRocks(){
  if (World.frameCount % 300 == 0) {
    var rock = createSprite(Math.round(random(50, 350),40, 10, 10));
    rock.addImage(rockImg);
    rock.scale=0.12;
    rock.velocityY = 3;
    rock.lifetime = 150;
    rockG.add(rock);
    }
}

function createBones(){
  if (World.frameCount % 170 == 0) {
    var bone = createSprite(Math.round(random(50, 350),40, 10, 10));
    bone.addImage(boneImg);
    bone.scale=0.12;
    bone.velocityY = 3;
    bone.lifetime = 150;
    boneG.add(bone);
    }
}


