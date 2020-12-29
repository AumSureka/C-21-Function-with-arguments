var movingrect;

var gameobject1,gameobject2,gameobject3;





function setup()
{

createCanvas(1200,800);

movingrect = createSprite (800,400,50,50);
movingrect.shapeColor = "blue";

gameobject1 = createSprite(100,100,50,60);
gameobject1.shapeColor = "yellow";


gameobject3 = createSprite(700,200,50,60);
gameobject3.shapeColor = "purple";

} 


function draw() {
background("black");

movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if (isTouching(movingrect,gameobject1))

{
movingrect.shapeColor = "red";
gameobject1.shapeColor = "red";
}

else 
{
 movingrect.shapeColor = "green";
 gameobject1.shapeColor = "green"; 
}


drawSprites();    
    
}   

                                                                                                                  