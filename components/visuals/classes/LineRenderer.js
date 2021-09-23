class LineRenderer{
    constructor(start, end, lineWidth, color){
        this.start = start;
        this.end = end;
        this.lineWidth = lineWidth;
        this.color = color;
        this.visible = true;

        drawables.push(this);
    }

    draw(){
        if(this.visible){
            mainCtx.beginPath();
            mainCtx.moveTo(this.start.x * scaleFactor, this.start.y * scaleFactor);
            mainCtx.lineTo(this.end.x * scaleFactor, this.end.y * scaleFactor);
            mainCtx.strokeStyle = this.color;
            mainCtx.lineWidth = this.lineWidth * scaleFactor;
            mainCtx.stroke(); 
        }
    }

    destroy(){
        drawables.splice(drawables.indexOf(this), 1);
    }
}
