class PathRenderer{
    constructor(points, lineWidth, color){
        this.points = points;
        this.lineWidth = lineWidth;
        this.color = color;
        this.visible = true;

        drawables.push(this);
    }

    draw(){
        if(this.visible){
            mainCtx.beginPath();
            mainCtx.moveTo(this.points[0].x * scaleFactor, this.points[0].y * scaleFactor);
    
            for(let p = 1; p < this.points.length; p++){
                mainCtx.lineTo(this.points[p].x * scaleFactor, this.points[p].y * scaleFactor);
            }
    
            mainCtx.strokeStyle = this.color;
            mainCtx.lineWidth = this.lineWidth * scaleFactor;
            mainCtx.stroke(); 
        }
    }

    destroy(){
        drawables.splice(drawables.indexOf(this), 1);
    }
}