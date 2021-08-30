//Variable Declaration
var mainCanvas;
var mainCtx;

//Warning: ups must be >= fps
var fps = 60;
var ups = 60;

var frameInterval = 1000/fps;
var timeLastFrame = -1;
var frameDeltaTime = -1;

var updateInterval = 1000/ups;
var timeLastUpdate = -1;
var updateDeltaTime = -1;

var gameUpdateReady = false;

window.onload = setup;

function setup(){
    mainCanvas = document.getElementById("mainCanvas");
    mainCtx = mainCanvas.getContext("2d");
    
    //Start update/animation cycle
    timeLastFrame = Date.now();
    timeLastUpdate = Date.now();
    updateGame();
}

//This is the main update function, which is called <ups> times per second 
function updateGame(){
    //Frame Rendering
    frameDeltaTime = Date.now() - timeLastFrame;        
    if(frameDeltaTime > frameInterval){
        timeLastFrame = Date.now();

        frameUpdate();
    }

    //Game Updates
    updateDeltaTime = Date.now() - timeLastUpdate;
    if(updateDeltaTime > updateInterval){
        timeLastUpdate = Date.now();
        
        gameUpdate();
    }

    setTimeout(updateGame, 1);
}

function frameUpdate(){
    mainCtx.clearRect(0, 0, 1200, 900);
}