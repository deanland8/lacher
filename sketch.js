
var gravity = 0.05

function preload() {

    landerNormalAnimation = loadAnimation("normal.png");
    bg = loadImage("bg_sur.png");
    thrustAnim = loadAnimation("b_thrust_1.png", "b_thrust_2.png", "b_thrust_3.png");
    crashAnim = loadAnimation("crash1.png", "crash2.png", "crash3.png");
    landingAnimation = loadAnimation("landing1.png", "landing2.png", "landing_3.png");
    leftThrustAnimation = loadAnimation("left_thruster_1.png", "left_thruster_2.png");
    rightThrustAnimation = loadAnimation("right_thruster_1.png", "right_thruster_2.png");
    groundImg = loadImage("lz.png")
}

function setup() {
    createCanvas(1000, 700);

    lander = createSprite(800, 450, 200, 200);
    lander.addAnimation('thrustAnim', thrustAnim);
    lander.addAnimation('left', leftThrustAnimation);
    lander.addAnimation('right', rightThrustAnimation);
    lander.addAnimation('normal', landerNormalAnimation);
    lander.scale = 0.3;

    ground = createSprite(500, 350, 1000, 20);
    ground.addImage(groundImg);
    ground.scale = 2;

}


function draw() {

    background(bg);

    lander.velocityY += gravity;

    if (keyDown(LEFT_ARROW)) {
        lander.velocityX = 3;
        lander.changeAnimation('left', leftThrustAnimation)
    }

    if (keyDown(RIGHT_ARROW)) {
        lander.velocityX = -3;
        lander.changeAnimation('right', rightThrustAnimation)
    }

    if (keyDown(UP_ARROW)) {
        lander.velocityY = -3;
        lander.changeAnimation('thrustAnim');
        lander.scale = 0.2

    }

    drawSprites();



}




