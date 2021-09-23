class Rectangle{
    constructor(topLeft, bottomRight, lineWidth, color){
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
        this.lineWidth = lineWidth;
        this.color = color;
        this.components = [];

        this.pr = new PathRenderer([this.topLeft, new Vect2d(this.bottomRight.x, this.topLeft.y), this.bottomRight, new Vect2d(this.topLeft.x, this.bottomRight.y), this.topLeft], this.lineWidth, this.color);
        this.components.push(this.pr);

        updatables.push(this);
    }

    update() {
        this.pr.points = [this.topLeft, new Vect2d(this.bottomRight.x, this.topLeft.y), this.bottomRight, new Vect2d(this.topLeft.x, this.bottomRight.y), this.topLeft];
        this.pr.lineWidth = this.lineWidth;
        this.pr.color = this.color;
    }

    destroy(){
        this.components.forEach(component => component.destroy());
        updatables.splice(updatables.indexOf(this), 1);
    }
}