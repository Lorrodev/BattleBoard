//Variable Declaration
var mainContainer;
var mainCanvas;
var mainCtx;

var drawables = [];
var updatables = [];

var frameInterval = 1000/FPS;
var timeLastFrame = -1;
var frameDeltaTime = -1;

var updateInterval = 1000/UPS;
var timeLastUpdate = -1;
var updateDeltaTime = -1;

var aspectRatio = RESOLUTION.x/RESOLUTION.y;
var scaleFactor = 1;

const WIDTH = RESOLUTION.x;
const HEIGHT = RESOLUTION.y;

function setup(){
    mainContainer = document.getElementById("mainContainer");
    mainCanvas = document.getElementById("mainCanvas");
    mainCtx = mainCanvas.getContext("2d");

    updateCanvasSize();
    
    //Start update/animation cycle
    timeLastFrame = Date.now();
    timeLastUpdate = Date.now();
    updateGame();
}

//This is the main update function, which is called <UPS> times per second 
function updateGame(){
    //Frame Rendering
    frameDeltaTime = Date.now() - timeLastFrame;        
    if(frameDeltaTime > frameInterval){
        timeLastFrame = Date.now();

        frameUpdate();
        
        drawables.forEach(drawable => drawable.draw());
    }

    //Game Updates
    updateDeltaTime = Date.now() - timeLastUpdate;
    if(updateDeltaTime > updateInterval){
        timeLastUpdate = Date.now();

        gameUpdate();
        
        updatables.forEach(updatable => updatable.update());
    }

    setTimeout(updateGame, 1);
}

function frameUpdate(){
    mainCtx.clearRect(0, 0, canvasWidth, canvasHeight);
}