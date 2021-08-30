class LineRenderer{
    constructor(start, end, lineWidth, color){
        this.start = start;
        this.end = end;
        this.lineWidth = lineWidth;
        this.color = color;

        drawables.push(this);
    }

    draw(){
        mainCtx.beginPath();
        mainCtx.moveTo(this.start.x, this.start.y);
        mainCtx.lineTo(this.end.x, this.end.y);
        mainCtx.strokeStyle = this.color;
        mainCtx.lineWidth = this.lineWidth;
        mainCtx.stroke(); 
    }

    destroy(){
        drawables.splice(drawables.indexOf(this), 1);
    }
}