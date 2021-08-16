var spaceImg, space;
var star, starImg;
var asteroid, asteroidImg;
var rocket, rocketImg;

var gameState = "play"

function preload() {
    asteroidImg = loadImage("asteroid.png");
    starImg = loadImage("star.png");
    rocketImg = loadImage("rocket.png");
    spaceImg = loadImage("space.png")
}

function setup() {
    createCanvas(600, 600);
    space = createSprite(300, 300, 10, 10);
    space.addImage("tower", towerImg);
    space.velocityY = 1;

    rocket = createSprite(200, 200, 10, 10);
    rocket.addImage(ghostImg);
    rocket.scale = 0.4;

    aseroidGroup = new Group();

}

function draw() {
    background(0);

    if (gameState === "play") {
        if (space.y > 400) {
            space.y = 300;
        }



        if (keyDown("up_arrow")) {
            rocket.velocityY = -6;
        }

        if (keyDown("right_arrow")) {
            rocket.x += 3;
        }

        if (keyDown("left_arrow")) {
            rocket.x -= 3;
        }

        rocket.velocityY = rocket.velocityY + 0.9;

        spawnAsteroid();

        if (asteroidGroup.isTouching(rocket)) {
            rocket.destroy();
            gameState = "end";
        }
        drawSprites();
    }

    if (gameState === "end") {
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230, 250)
    }

}

function spawnAsteroid() {
    if (frameCount % 240 === 0) {
        var asteroid = createSprite(Math.round(random(120, 450)), -50)
        asteroid.addImage(asteroidImg);

        rocket.depth = door.depth;
        rocket.depth += 1;

        asteroid.lifetime = 800;
        asteroidGroup.add(asteroid);

    }

}



