var fixedRect, movingRect 


function setup() {
createCanvas (1200,800) 
fixedRect = createSprite (200,200,50,80)
movingRect = createSprite ( 400,200,80,80)

}

function draw() 
{
background (0);
movingRect.x= World.mouseX;
movingRect.y= World.mouseY;
drawsprites ();
}

