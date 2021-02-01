var canvas;
var music;
var collision1, collision2, collision3, collision4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    collision1 = createSprite(100, 590, 200, 20);
    collision1.shapeColor = 'red';
    collision2 = createSprite(300, 590, 200, 20);
    collision2.shapeColor = 'blue';
    collision3 = createSprite(500, 590, 200, 20);
    collision3.shapeColor = 'yellow';
    collision4 = createSprite(700, 590, 200, 20);
    collision4.shapeColor = 'green';
    
    //create box sprite and give velocity
    box = createSprite(random(20,780), 300, 30, 30);
    box.shapeColor = "white";
    box.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(collision1.isTouching(box) && box.bounceOff(collision1)){

        box.shapeColor = 'red';

    }
    if(collision2.isTouching(box) && box.bounceOff(collision2)){

        box.shapeColor = 'blue';

    }
    if(collision3.isTouching(box) && box.bounceOff(collision3)){

        box.shapeColor = 'yellow';

    }
    if(collision4.isTouching(box) && box.bounceOff(collision4)){

        box.shapeColor = 'green';

    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}

