
"use strict";

const app = new PIXI.Application(600,600);

document.getElementById("content").appendChild(app.view);

const sceneWidth = app.view.width;
const sceneHeight = app.view.height;

let stage;

//scenes
let startScene;
let gameScene;
let gameOverscene;

function setUp(){
    app.ticker.add(gameLoop);

    startScene = new PIXI.Container();
    let stage = app.stage;

    stage.addChild(startScene);
    
    gameScene.visible = false;
    stage.addChild(gameScene);

    gameOverscene.visible = false;
    stage.addChild(gameOverscene);
}


function gameLoop(){
    //delta time
    let dt = 1/app.ticker.FPS;
    if(dt>1/12)dt = 1/12;

    //render current room

    //move player

    //move enemies

    //check for collisions

    //clean up

    //game over?

    
}
