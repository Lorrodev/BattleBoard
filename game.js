//Variable Declaration
var mainCanvas;
var mainCtx;

//Warning: ups must be >= fps
var fps = 60;
var ups = 80;

var frameInterval = 1000/fps;
var timeLastFrame = -1;
var frameDeltaTime = -1;

var updateInterval = 1000/ups;
var timeLastUpdate = -1;
var updateDeltaTime = -1;

//Add your variables here:



//Setup
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
    //Game Updates
    updateDeltaTime = Date.now() - timeLastUpdate;

    if(updateDeltaTime > updateInterval){
        timeLastUpdate = Date.now();

        //Execute your function calls here:


    }


    //Frame Rendering
    frameDeltaTime = Date.now() - timeLastFrame;

    if(frameDeltaTime > frameInterval){
        timeLastFrame = Date.now();

        nextFrame();
    }

    setTimeout(updateGame, 1);
}

function nextFrame(){
    mainCtx.clearRect(0, 0, 1200, 900);

    //frame updates go here
}