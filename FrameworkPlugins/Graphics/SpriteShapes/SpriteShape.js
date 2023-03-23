

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

        this.strokeStyle = params.strokeStyle || params.lineColor || params.color || this.strokeStyle;
        this.fillStyle = params.fillStyle || params.fillColor || params.color || this.fillStyle;
        this.lineWidth = params.lineWidth || this.lineWidth;
        this.lineCap = params.lineCap || this.lineCap;
        this.lineJoin = params.lineJoin || this.lineJoin;
        this.fFill = params.fillOrNot || params.fFill || params.fill || this.fFill;

    }

    startDraw(camera, spriteRenderer) {
        let ctx = camera.drawingContext;
        
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = SpriteShape.localLengthToCanvasLength(this.lineWidth, spriteRenderer.node.getComponent("Transform"), camera);
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

    static localPosToGlobalPos(pos, transform) {
        return pos.rotate(transform.rotation).scale(transform.size).add(transform.position);
    }

    static localCoordinatesToCanvasCoordinates(pos, transform, camera) {
        let retPos = this.localPosToGlobalPos(pos, transform);
        retPos = camera.globalPosToCanvasPos(retPos, camera);

        return retPos;
    }

    static localLengthToCanvasLength(length, transform, camera) {
        return camera.node.getComponent("Transform").globalLengthToLocalLength(transform.localLengthToGlobalLength(length));
    }

    static localRotationToCanvasRotation(rotation, transform, camera) {
        return camera.node.getComponent("Transform").globalRotationToLocalRotation(transform.localRotationToGlobalRotation(rotation));
    }

}