import {Vector2} from "/FrameworkPlugins/Vector2.js";


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

    static localCoordinatesToGlobalCoordinates(pos, transform) {
        let retPos = pos;

        return retPos;
    }

    static globalCoordinatesToCanvasCoordinates(pos, camera) {
        let retPos = pos;
        retPos = pos.subtract(camera.node.getComponent("Transform").position);

        retPos = new Vector2(
            retPos.x + camera.canvas.width/2,
            camera.canvas.height/2 - retPos.y
        );

        return retPos;
    }

    static localCoordinatesToCanvasCoordinates(pos, transform, camera) {
        let retPos = this.localCoordinatesToGlobalCoordinates(pos, transform);
        retPos = this.globalCoordinatesToCanvasCoordinates(retPos, camera);

        return retPos;
    }

}