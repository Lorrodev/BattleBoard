window.addEventListener("keydown", keyDownRecieved, false);
window.addEventListener("keyup", keyUpRecieved, false);

//Default keys
var wKey = new InputKey(87);
var aKey = new InputKey(65);
var sKey = new InputKey(83);
var dKey = new InputKey(68);
var qKey = new InputKey(81);
var eKey = new InputKey(69);
var spaceKey = new InputKey(32);

//Action mapping
//Add your actions to inputActions.js
wKey.action = defaultAction;
aKey.action = defaultAction;
sKey.action = defaultAction;
dKey.action = defaultAction;
qKey.action = defaultAction;
eKey.action = defaultAction;
spaceKey.action = defaultAction;

function keyDownRecieved(e) {
	switch(e.keyCode){
		case wKey.code:
			wKey.isActive = true;
			wKey.action.execute();
        break;

		case aKey.code:
			aKey.isActive = true;
			aKey.action.execute();
		break;

		case sKey.code:
			sKey.isActive = true;
			sKey.action.execute();
        break;

		case dKey.code:
			dKey.isActive = true;
			dKey.action.execute();
        break;
        
		case qKey.code:
			qKey.isActive = true;
			qKey.action.execute();
		break;
		
		case eKey.code:
			eKey.isActive = true;
			eKey.action.execute();
		break;
		
		case spaceKey.code:
			spaceKey.isActive = true;
			spaceKey.action.execute();
		break;
	}
}

function keyUpRecieved(e) {
	switch(e.keyCode){
		case wKey.code:
			wKey.isActive = false;
        break;

		case aKey.code:
			aKey.isActive = false;
		break;

		case sKey.code:
			sKey.isActive = false;
        break;

		case dKey.code:
			dKey.isActive = false;
        break;
        
		case qKey.code:
			qKey.isActive = false;
		break;
		
		case eKey.code:
			eKey.isActive = false;
		break;
		
		case spaceKey.code:
			spaceKey.isActive = false;
		break;
	}
}

