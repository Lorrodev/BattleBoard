class InputAction{
    constructor(functionToCall){
        this.functionToCall = functionToCall;
    }

    execute(){
        if(this.functionToCall != null){
            this.functionToCall();
        }
    }
}