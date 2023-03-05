

export class SpriteShape {

    strokeStyle = "black";
    fillStyle = "black";
    lineWidth = 1;
    lineCap = "square";
    lineJoin = "miter";

    fFill = false;

    constructor(params = {}) {

        if(this.constructor === SpriteShape){
            throw new Error("FYI: Instance of Abstract class cannot be instantiated");
        }

        this.strokeStyle = params.strokeStyle || params.lineColor || this.strokeStyle;
        this.fillStyle = params.fillStyle || params.fillColor || this.fillStyle;
        this.lineWidth = params.lineWidth || this.lineWidth;
        this.lineCap = params.lineCap || this.lineCap;
        this.lineJoin = params.lineJoin || this.lineJoin;
        this.fFill = params.fillOrNot || params.fFill || this.fFill;

    }

    startDraw(camera) {
        let ctx = camera.drawingContext;
        
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = this.lineCap;
        ctx.lineJoin = this.lineJoin;

        ctx.beginPath();
    }

    endDraw(camera) {
        let ctx = camera.drawingContext;

        if(this.fFill === true) {
            ctx.fill();
        }

        ctx.stroke();
        ctx.closePath();
    }

}