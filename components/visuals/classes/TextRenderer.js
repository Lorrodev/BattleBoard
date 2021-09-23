class TextRenderer{
    constructor(text, position, fontSize = 50, fontFamily = "Arial", color = "white", outlineOnly = false){
        this.text = text;
        this.position = position;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.color = color;
        this.outlineOnly = outlineOnly;

        this.visible = true;

        drawables.push(this);
    }

    draw(){
        if(this.visible){
            mainCtx.font = (this.fontSize * scaleFactor)+"px "+this.fontFamily;
            if(this.outlineOnly){
                mainCtx.strokeStyle = this.color;
                mainCtx.strokeText(this.text, this.position.x * scaleFactor, this.position.y * scaleFactor); 
            }else{
                mainCtx.fillStyle = this.color;
                mainCtx.fillText(this.text, this.position.x * scaleFactor, this.position.y * scaleFactor); 
            }
        }
    }

    destroy(){
        drawables.splice(drawables.indexOf(this), 1);
    }
}
